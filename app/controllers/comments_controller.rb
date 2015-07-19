class CommentsController < ApplicationController

  respond_to :js

  def create
    @post = Post.find(params[:comment][:post_id])
    @comment = Comment.new(params[:comment].permit(:content, :post_id, :content_html), user_id: current_user.id)
    @comment.save
    respond_to do |format|
      format.js
    end
  end

end