class CommentsController < ApplicationController

  def create
    @post = Post.find(params[:comment][:post_id])
    @comment = Comment.new(params[:comment].permit(:content, :post_id, :user_id))
    @comment.save
    redirect_to @post
  end

end