module CommentsHelper

  def check_if_comment_cannot_be_seen(comment)
    if current_user
      if comment.users_id
        comment.hidden or
            User.find(comment.users_id).banned? or
            HiddenUser.where(hidden_user_id: comment.users_id).where(user_id: current_user.id).size > 0 or
            HiddenComment.where(user_id: current_user.id).where(comment_id: comment.id).size > 0
      else
        comment.hidden or
            HiddenComment.where(user_id: current_user.id).where(comment_id: comment.id).size > 0
      end
    else
      comment.hidden or User.find(comment.users_id).banned?
    end
  end

end