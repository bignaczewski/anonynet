class HiddenPost < ActiveRecord::Base

  belongs_to :user
  has_many :post

end