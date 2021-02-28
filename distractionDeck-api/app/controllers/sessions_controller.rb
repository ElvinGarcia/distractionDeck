class SessionsController < ApplicationController

  def login
    # user = User.find_by(name: params[:username])
    user = User.find_by(name: "elvin")
    # if user && user.authenticate(params[:password])
    if user && user.authenticate("admin")
       render :json => UserSerializer.new(user).to_serialized_json, status: 200
    else
      render json: { alert: 'Invalid email/password combination' }, status: 401
    end
 end

  def logout

 end

  protected

  def auth_hash
    byebug

  end
end
