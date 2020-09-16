class AddColumnToUserTable < ActiveRecord::Migration[6.0]
  def change
    add_reference :posts, :column
  end
end
