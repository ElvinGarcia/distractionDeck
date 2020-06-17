class SessionsController < ApplicationController

   
 def login
  byebug
  if params[:username] && password = params[:password] && @user = User.find_by(name: params[:username])
    if @user.authenticate(password)
      login_user(@user) 
      rendder json: @user
    end
  end
    render status: 401
 end
    









end