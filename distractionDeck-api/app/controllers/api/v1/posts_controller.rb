class Api::V1::PostsController < ApplicationController
  before_action :find_post, only:[:update,:show,:destroy]
def index

end

def create
    user = User.find(params[:id])
    home_column = user.columns.find_by(name: "Home")
    post = Post.create(body: params[:post] ,user: user, column: home_column)
    if post.persisted?
      render :json => PostSerializer.new(post).to_serialized_json, status: 201
      else
      render :json => "#{post.errors.messages}", status: 500
    end
end

  def show

  end


  def edit

  end

  def update
      if  (@post.user.id == params[:user_id].to_c) && @post.update!(post_strong_params)
        #return JSON success message with post
        render :json => PostSerializer.new(@post).to_serialized_json, status: 201 if @post.persisted?
      else
        # return JSON  error
        render :json => "#{@post.errors.messages}", status: 500
      end

  end

  def destroy
     if (@post.user.id == params[:user_id].to_c)
      @post.destroy!
      render :json => PostSerializer.new(@post).to_serialized_json, status: 200
     else
      # return JSON  error
      render :json => "#{@post.errors.messages}", status: 500
     end
 end

 private

  def post_strong_params
    params.require(:post).permit(:body)
  end

  def find_post
    @post ||= Post.find(params[:post_id])
    # encapsulate if action is allow by user here to DRY up the code
    # render :json =>{message: "record not found"}, status: 500 if !@post
  end

end
