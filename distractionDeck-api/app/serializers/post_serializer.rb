class PostSerializer
  include FastJsonapi::ObjectSerializer
  attributes :body, :user_id, :id, :created_at, :updated_at
end
