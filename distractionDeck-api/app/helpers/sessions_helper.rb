
module SessionsHelper
    #add user to the current session
    def log_in(user)
        session[:user_id] = user.id
    end

    #returns the current user
    def current_user
        if ( user_id = session[:user_id] )
            @current_user ||= User.find(session[:user_id])
        elsif (user_id = cookies.signed[:user_id])
            user = User.find_by(id: user_id)
           if user && user.authenticated?(:remember, cookies[:remember_token])
            log_in user
            @current_user = user
           end
        end
    end

    # boolean for correct resource is allow for current user
    def current_user?(user)
        user == current_user
    end

    #stores in session the location that was navigated before login in
    def navigated_location
        session[:before_login] = request.original_url if request.get?
    end

    #redirects back to resourced navigated before login
    def redirect_back_to_intent(user)
        redirect_to(session[:before_login] || user)
        session.delete(:before_login)
    end


    # Returns true if the user is logged in, false otherwise.
    def logged_in?
    !current_user.nil?
    end

    #sets a signed cookie to store the user id and token when chosen not to be forgotten
    def remember(user)
        user.remember
        cookies.permanent.signed[:user_id]= user.id
        cookies.permanent[:remember_token] = user.remember_token
    end

    def forget
        current_user.forget #sets the remember digest to nil
        cookies.delete(:user_id)
        cookies.delete(:remember_token)
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