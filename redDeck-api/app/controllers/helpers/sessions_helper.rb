
module SessionsHelper

    def login_in(user)
        #add user to the current session
        session[:user_id] = user.id
    end

    
    
end