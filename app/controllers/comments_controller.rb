class CommentsController < ApplicationController

  respond_to :js

  def create
    @post = Post.find(params[:comment][:post_id])
    @comment = Comment.new(params[:comment].permit(:content, :content_html, :post_id),
                           content_html: Obscenity.sanitize(params[:comment][:content]))
    @comment.users_id = current_user.id if current_user
    @comment.save
    respond_with(@comment)
  end

end