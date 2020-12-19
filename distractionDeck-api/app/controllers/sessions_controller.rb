class SessionsController < ApplicationController
  def login
    user = User.find_by(name: params[:username])
    if user && user.authenticate(params[:password])

       render :json => UserSerializer.new(user).to_serialized_json, status: 200
    else
      render json: { alert: 'Invalid email/password combination' }, status: 401
    end
 end

  def logout
    byebug
    # doesn't work
    # log_out if logged_in?
    # redirect_to root_path
 end

  protected

  def auth_hash
    byebug
    # doesn't work
    # request.env['omniauth.auth']
  end
end
