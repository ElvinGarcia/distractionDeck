class PostSerializer
  include FastJsonapi::ObjectSerializer
  attributes :body, :user_id, :id, :created_at, :updated_at

  def initialize(post_object)
    @post = post_object
  end

  def to_serialized_json
    #options need to sanitized from revealing the password_digest
    options = {except: [:created_at, :updated_at], include:[user:{except:[:password_digest]}]}
    @post.to_json(options)
  end

end
