class ColumnSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :user_id
end
