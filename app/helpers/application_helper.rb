module ApplicationHelper

  class NoParagraphRenderer < ::Redcarpet::Render::XHTML
    def paragraph(text)
      text
    end
  end

  def self.image
    require 'redcarpet'

    AutoHtml.add_filter(:image).with({:alt => ''}) do |text, options|
      r = Redcarpet::Markdown.new(NoParagraphRenderer)
      alt = options[:alt]
      options[:proxy] ||= ""
      text.gsub(/(?<!src=")https?:\/\/.+?\.(jpg|jpeg|bmp|gif|png)(\?\S+)?/i) do |match|
        r.render("![#{alt}](#{options[:proxy]}#{match})")
      end
    end
  end

  def self.youtube
    AutoHtml.add_filter(:youtube).with(:width => 420, :height => 315, :frameborder => 0, :wmode => nil, :autoplay => false, :hide_related => false) do |text, options|
      regex = /(https?:\/\/)?(www.)?(youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/watch\?feature=player_embedded&v=)([A-Za-z0-9_-]*)(\&\S+)?(\?\S+)?/
      text.gsub(regex) do
        youtube_id = $4
        width = options[:width]
        height = options[:height]
        frameborder = options[:frameborder]
        wmode = options[:wmode]
        autoplay = options[:autoplay]
        hide_related = options[:hide_related]
        src = "//www.youtube.com/embed/#{youtube_id}"
        params = []
        params << "wmode=#{wmode}" if wmode
        params << "autoplay=1" if autoplay
        params << "rel=0" if hide_related
        src += "?#{params.join '&'}" unless params.empty?
        %{<div class="video_youtube"><iframe width="#{width}" height="#{height}" src="#{src}" frameborder="#{frameborder}" allowfullscreen></iframe></div>}
      end
    end
  end

  def self.instagram
    require 'uri'
    require 'net/http'

    AutoHtml.add_filter(:instagram) do |text|
      text << '/' unless text.end_with?('/')
      regex = %r{https?:\/\/(www.)?instagr(am\.com|\.am)/p/.+}
      text.gsub(regex) do
        %{<iframe src="#{text}embed" height="714" width="616" frameborder="0" scrolling="no"></iframe>}
      end
    end
  end

  def self.twitter
    AutoHtml.add_filter(:twitter).with({}) do |text, options|
      require 'uri'
      require 'net/http'

      regex = %r{(?<!href=")https://twitter\.com(/#!)?/[A-Za-z0-9_]{1,15}/status(es)?/\d+(/?)}

      text.gsub(regex) do |match|
        params = {:url => match}.merge(options)

        uri = URI("https://api.twitter.com/1/statuses/oembed.json")
        uri.query = URI.encode_www_form(params)

        http = Net::HTTP.new(uri.host, uri.port)
        http.use_ssl = true

        response = JSON.parse(http.get(uri.request_uri).body)
        response["html"]
      end
    end
  end

  def self.simple_format
    AutoHtml.add_filter(:simple_format).with({}) do |text, html_options|
      require 'action_view'

      args = [text, {}, {:sanitize => false}]
      begin
        ActionView::Base.new.simple_format(*args)
      rescue ArgumentError
        # Rails 2 support
        args.pop
        retry
      end
    end
  end

end
