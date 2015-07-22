class PostsController < ApplicationController
  before_action :set_post, only: [:show, :edit, :update, :destroy]

  respond_to :js, :html

  skip_before_filter :verify_authenticity_token, :only => [:create] # for image upload and AJAX

  # GET /posts
  # GET /posts.json
  def index
    # console
    new # for rendering new_post in index
    page = params[:page] ? params[:page] : 1
    if current_user and current_user.show_all
      @posts = Post.where.not(user_id: User.where(banned: true).ids) # not banned
                   .where.not(hidden: true) # not hidden globally
                   .where.not(user_id: HiddenUser.where(user_id: current_user.id).pluck(:hidden_user_id)) # not hidden as user
                   .where.not(id: current_user.hidden_posts.pluck(:post_id)) # not hidden as post
                   .order('created_at desc').page(page).per(18)
    elsif current_user and !current_user.show_all
      @posts = Post.where.not(user_id: nil) #not anonymous
                   .where.not(user_id: User.where(banned: true).ids)
                   .where.not(hidden: true)
                   .where.not(user_id: HiddenUser.where(user_id: current_user.id).pluck(:hidden_user_id))
                   .where.not(id: current_user.hidden_posts.pluck(:post_id))
                   .order('created_at desc').page(page).per(18)
    else
      @posts = Post.where.not(user_id: User.where(banned: true).ids)
                   .where.not(hidden: true)
                   .order('created_at desc').page(page).per(18)
    end
  end

  # GET /posts/1
  # GET /posts/1.json
  def show # TODO filtrowanie na podstawie tego co wyzej, o ile zrobisz show (np. przy notyfikacjach)
    @comment = Comment.new
    @post = Post.find(params[:id])
    @comments = @post.comments
  end

  # GET /posts/new
  def new
    @post = Post.new
  end

  # GET /posts/1/edit
  def edit
  end

  # POST /posts
  # POST /posts.json
  def create
    @post = Post.new(post_params, content_html: Obscenity.sanitize(post_params[:content]))
    @post.user_id = current_user.id if current_user
    @post.save
    respond_to do |format|
      format.html { redirect_to posts_path }
      format.js
    end
  end

  def update
    @post.update(post_params)
    respond_with(@post)
  end

  def destroy
    @post.destroy
    respond_with(@post)
  end

  def show_comments
    @comment = Comment.new
    @post = Post.find(params[:id])
    @comments = @post.comments.order('created_at asc')
  end

  def hide_comments
    @post = Post.find(params[:id])
  end

  def report_post
    @post = Post.find(params[:id])
    hp = HiddenPost.new(user_id: current_user.id, post_id: @post.id)
    hp.save

    # below: if three combined comments and posts from user are equal 3 or more, this user will be hidden for current_user
    if @post.user_id and ((HiddenPost.where(user_id: current_user.id).where(post_id: Post.where(user_id: @post.user_id).ids)
                               .size+HiddenComment.where(user_id: current_user.id)
                                                                    .where(comment_id: Comment.where(user_id: @post.user_id).ids).size) >= 3)
      hu = HiddenUser.new(user_id: current_user.id, hidden_user_id: @post.user_id)
      hu.save

      if HiddenUser.where(hidden_user_id: @post.user_id).size >= 3
        bu = User.find(@post.user_id)
        bu.banned = true
        bu.save
      end
    end

    # to hide globally (for all users)
    if HiddenPost.where(post_id: @post.id).size >= 3
      @post.hidden=true
      @post.save
    end
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_post
    @post = Post.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def post_params
    params.require(:post).permit(:content, :image_content, :content_html, :user_id)
  end
end
