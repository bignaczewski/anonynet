class UsersController < ApplicationController

  respond_to :js

  # GET /users
  # GET /users.json
  def index
    @users = User.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @users }
    end
  end

  # GET /users/1
  # GET /users/1.json
  def show
    @user = User.find(params[:id])
    @activities = PublicActivity::Activity.where(owner_id: @user.id, owner_type: "User")

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @user }
    end
  end

  def update
    current_user.update(show_all: params[:user][:show_all])
    redirect_to :back
  end

  def like
    if params[:likeable_type] == 'Post'
      @likeable = Post.find(params[:likeable_id])
    else
      @likeable = Comment.find(params[:likeable_id])
    end
    current_user.like!(@likeable)
  end

  def unlike
    if params[:likeable_type] == 'Post'
      @likeable = Post.find(params[:likeable_id])
    else
      @likeable = Comment.find(params[:likeable_id])
    end
    current_user.unlike!(@likeable)
  end

end