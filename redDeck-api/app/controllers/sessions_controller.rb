class SessionsController < ApplicationController
   
 def login
  @user = User.find_by(name: params[:username])
  if @user && @user.authenticate(params[:password])
    log_in(@user) 
    #verifies via params that the user selected to be remember then runs 
    #remember user instant method
    # remember(@user) if params[:user][:remember] == "1"
    render json: UserSerializer.new(@user)
   else
        alert[:alert]="Invalid email/password combination"
        redirect_to login_path
  end
end
    
 def logout
    log_out if logged_in?
    redirect_to root_path
end


 protected

  def auth_hash
    request.env['omniauth.auth']
  end







end