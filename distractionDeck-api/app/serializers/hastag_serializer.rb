class HastagSerializer
  include FastJsonapi::ObjectSerializer
  attributes :tag, :post_id
end
