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

  def self.vimeo
    AutoHtml.add_filter(:vimeo).with(:width => 440, :height => 248, :show_title => false, :show_byline => false, :show_portrait => false) do |text, options|
      text.gsub(/https?:\/\/(www.)?vimeo\.com\/([A-Za-z0-9._%-]*)((\?|#)\S+)?/) do
        vimeo_id = $2
        width = options[:width]
        height = options[:height]
        show_title = "title=0" unless options[:show_title]
        show_byline = "byline=0" unless options[:show_byline]
        show_portrait = "portrait=0" unless options[:show_portrait]
        frameborder = options[:frameborder] || 0
        query_string_variables = [show_title, show_byline, show_portrait].compact.join("&")
        query_string = "?" + query_string_variables unless query_string_variables.empty?

        %{<iframe src="//player.vimeo.com/video/#{vimeo_id}#{query_string}" width="#{width}" height="#{height}" frameborder="#{frameborder}"></iframe>}
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
        %{<div class="video youtube"><iframe width="#{width}" height="#{height}" src="#{src}" frameborder="#{frameborder}" allowfullscreen></iframe></div>}
      end
    end
  end

  def self.flickr
    AutoHtml.add_filter(:flickr).with(:maxwidth => nil, :maxheight => nil, :link_options => {}) do |text, options|
      require 'uri'
      require 'net/http'
      require 'rexml/document'

      regex = %r{http://(www\.)?flickr\.com/photos/[^\s<]*}

      text.gsub(regex) do |match|
        params = {:url => match, :format => "json"}
        [:maxwidth, :maxheight].each { |p| params[p] = options[p] unless options[p].nil? or not options[p] > 0 }

        uri = URI("http://www.flickr.com/services/oembed")
        uri.query = URI.encode_www_form(params)

        response = JSON.parse(Net::HTTP.get(uri))

        link_options = Array(options[:link_options]).reject { |k, v| v.nil? }.map { |k, v| %{#{k}="#{REXML::Text::normalize(v)}"} }.join(' ')
        %{<a href="#{match}"#{ ' ' + link_options unless link_options.empty? }><img src="#{response["url"]}" alt="#{response["title"]}" title="#{response["title"]}" /></a>}
      end
    end
  end

  def self.google_map
    # encoding: UTF-8
    AutoHtml.add_filter(:google_map).with(:width => 420, :height => 315, :style => "color:#000;text-align:left", :link_text => "View Larger Map", :show_info => true, :type => :normal, :zoom => 18, :more => '') do |text, options|
      map_type = {:normal => '&amp;t=m', :satellite => '&amp;t=k', :terrain => '&amp;t=p', :hibrid => '&amp;t=h'}
      regex = /(https?):\/\/maps\.google\.([a-z\.]+)\/maps\?(.*)/
      text.gsub(regex) do
        domain_country = $2
        map_query = $3
        width = options[:width]
        height = options[:height]
        style = options[:style]
        link_text = options[:link_text]
        type = options[:type].to_sym
        map_options = (options[:show_info] ? '' : '&amp;iwloc=near')
        map_options << map_type[type] if map_type.has_key?(type)
        map_options << "&amp;z=#{options[:zoom]}"
        map_options << options[:more]
        %{<iframe width="#{width}" height="#{height}" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="//maps.google.#{domain_country}/maps?f=q&amp;source=s_q&amp;#{map_query}&amp;output=embed#{map_options}"></iframe><br /><small><a href="//maps.google.#{domain_country}/maps?f=q&amp;source=embed&amp;#{map_query}" style="#{style}">#{link_text}</a></small>}
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
