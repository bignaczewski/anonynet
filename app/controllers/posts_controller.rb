class PostsController < ApplicationController
  before_action :set_post, only: [:show, :edit, :update, :destroy]

  respond_to :html
  respond_to :js

  # GET /posts
  # GET /posts.json
  def index
    @posts = Post.order(created_at: :desc)
    respond_with(@posts)
  end

  # GET /posts/1
  # GET /posts/1.json
  def show
    @comment = Comment.new
    @post = Post.find(params[:id])
    @comments = @post.comments

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @post }
    end
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
    @post = Post.new(post_params, user_id: current_user.id)
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

    respond_to do |format|
      format.js
      format.html
      format.json { render json: @post }
    end
  end

  def hide_comments
    @post = Post.find(params[:id])

    respond_to do |format|
      format.js
      format.html
      format.json { render json: @post }
    end
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_post
    @post = Post.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def post_params
    params.require(:post).permit(:content, :image_content, :content_html)
  end
end
