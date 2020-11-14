class UserSerializer
  def initialize(user_object)
    @user = user_object
  end

  def to_serialized_json
    #options need to sanitized from revealing the password_digest
    # user => columns => posts
    options = {include: [columns:{include:[posts:{include: :user, except:[:password_digest,:password] }]}], except:[:password_digest,:password]}
    @user.to_json(options)
  end

end
