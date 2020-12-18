class Api::V1::PostsController < ApplicationController

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


  end

  def destroy

 end
end
