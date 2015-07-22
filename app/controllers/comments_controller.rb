class CommentsController < ApplicationController

  respond_to :js

  def create
    @post = Post.find(params[:comment][:post_id])
    @comment = Comment.new(params[:comment].permit(:content, :content_html, :post_id),
                           content_html: Obscenity.sanitize(params[:comment][:content]))
    @comment.user_id = current_user.id if current_user
    @comment.save
    respond_with(@comment)
  end

  def report_comment
    @comment = Comment.find(params[:id])
    hc = HiddenComment.new(user_id: current_user.id, comment_id: @comment.id)
    hc.save

    # below: if three combined comments and posts from user are equal 3 or more, this user will be hidden for current_user
    if @comment.user_id and ((HiddenPost.where(user_id: current_user.id).where(post_id: Post.where(user_id: @comment.user_id).ids)
                                  .size+HiddenComment.where(user_id: current_user.id)
                                            .where(comment_id: Comment.where(user_id: @comment.user_id).ids).size) >= 3)
      hu = HiddenUser.new(user_id: current_user.id, hidden_user_id: @comment.user_id)
      hu.save

      if HiddenUser.where(hidden_user_id: @comment.user_id).size >= 3
        bu = User.find(@comment.user_id)
        bu.banned = true
        bu.save
      end
    end

    if HiddenComment.where(comment_id: @comment.id).size >= 3
      @comment.hidden=true
      @comment.save
    end
  end

end