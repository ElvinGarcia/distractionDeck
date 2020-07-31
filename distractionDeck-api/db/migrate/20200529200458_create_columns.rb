class CreateColumns < ActiveRecord::Migration[6.0]
  def change
    create_table :columns do |t|
      t.string :home
      t.string :notifications
      t.string :user
      t.string :mentions
      t.string :followers
      t.string :trending
      t.string :messages
      t.string :scheduled

      t.timestamps
    end
  end
end
