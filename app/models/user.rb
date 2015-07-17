class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable, :recoverable, :trackable, :validatable
  devise :database_authenticatable, :registerable, :rememberable

  validates :nickname, presence: true
  validates :nickname, uniqueness: true, if: -> { self.nickname.present? }
  validates_presence_of :password, :on => :create
  validates_confirmation_of :password, :on => :create
  validates_length_of :password, :within => Devise.password_length, :allow_blank => true

end