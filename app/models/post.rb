class Post < ActiveRecord::Base

  belongs_to :user
  has_many :comments, dependent: :destroy

  has_many :hidden_posts
  has_many :users, through: :hidden_posts

  acts_as_likeable

  attachment :image_content, type: :image
  # attr_accessor :image_content_id

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