class CommentsController < ApplicationController

  respond_to :js

  def create
    @post = Post.find(params[:comment][:post_id])
    @comment = Comment.new(params[:comment].permit(:content, :post_id, :user_id))
    respond_to do |format|
      format.js
    end
  end

end