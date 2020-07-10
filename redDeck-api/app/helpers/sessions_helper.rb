module SessionsHelper
 include ::ActionController::Cookies

    def log_in(user)
        #add user to the current session
        session[:user_id] = user.id
        
    end

     #logout the user and sets @user to nil
    def log_out
        forget #undoes the creation of cookies creation
        session.delete(:user_id)
        current_user = nil
        flash[:notice]="Your Session has Ended"
    end

    def delete_account(user)
        if current_user?(user)
            forget   
            reset_session  
        end
        user.destroy
    end
    
end