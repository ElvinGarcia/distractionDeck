class CommentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :body, :post_id, :id, :updated_at
end
