class UserSerializer
  def initialize(user_object)
    @user = user_object
  end

  def to_serialized_json
    options = {include: [:posts,:columns], except:[:password_digest,:password]}
    @user.to_json(options)

  end

end
