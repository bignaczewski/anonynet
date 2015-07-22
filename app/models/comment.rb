class Comment < ActiveRecord::Base

  belongs_to :post
  belongs_to :user

  has_many :hidden_comments
  has_many :users, through: :hidden_comments

  acts_as_likeable

  auto_html_for :content do
    html_escape
    image
    youtube
    link :target => '_blank', :rel => 'nofollow'
    simple_format
  end

end