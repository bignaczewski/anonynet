class HiddenUser < ActiveRecord::Base

  belongs_to :user
  belongs_to :user, :foreign_key => :hidden_user_id

end