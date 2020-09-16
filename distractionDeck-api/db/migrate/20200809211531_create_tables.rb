class CreateTables < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :password_digest
      t.datetime :created_at
      t.datetime :updated_at
    end
  end

  create_table :posts do |t|
    t.text :body
    t.belongs_to :user
    t.datetime :created_at
    t.datetime :updated_at
  end

   create_table :hastags do |t|
    t.string :tag
    t.belongs_to :post
    t.datetime :created_at
    t.datetime :updated_at
  end

  create_table :columns do |t|
    t.string :name
    t.belongs_to :user
    t.datetime :created_at
    t.datetime :updated_at
  end

   create_table :comments do |t|
    t.text :body
    t.belongs_to :post
    t.datetime :created_at
    t.datetime :updated_at
  end




end
