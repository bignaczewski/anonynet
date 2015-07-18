class Post < ActiveRecord::Base

  belongs_to :user

  acts_as_likeable

  has_attached_file :image_content, :styles => {:medium => '300x300>', :thumb => '100x100>'}
  validates_attachment_content_type :image_content, :content_type => /\Aimage\/.*\Z/,
                                    :size => {:in => 0..10.megabytes}

end