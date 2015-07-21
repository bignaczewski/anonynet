class PostsController < ApplicationController
  before_action :set_post, only: [:show, :edit, :update, :destroy]

  respond_to :js, :html

  # GET /posts
  # GET /posts.json
  def index
    new if current_user # for rendering new_post in index
    page = params[:page] ? params[:page] : 1
    @posts = Post.order('created_at desc').page(page).per_page(18)
  end

  # GET /posts/1
  # GET /posts/1.json
  def show
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
    @post.user_id = current_user.id
    @post.save
    respond_with(@post)
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
    @comments = @post.comments
  end

  def hide_comments
    @post = Post.find(params[:id])
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
