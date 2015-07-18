class HomeController < ApplicationController

  def index
    if user_signed_in?
      @post = Post.new
    end
  end

end
