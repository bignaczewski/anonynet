class Post < ActiveRecord::Base

  belongs_to :user
  has_many :comments

  acts_as_likeable

  has_attached_file :image_content, :styles => {:medium => '300x300>', :thumb => '100x100>'}
  validates_attachment_content_type :image_content, :content_type => /\Aimage\/.*\Z/,
                                    :size => {:in => 0..10.megabytes}

  auto_html_for :content do
    html_escape
    image
    youtube
    twitter
    link :target => '_blank', :rel => 'nofollow'
    simple_format
  end

  def self.orderpaginate(options)
    # code here
  end

end