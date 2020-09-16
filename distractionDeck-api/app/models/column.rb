class Column < ApplicationRecord
    has_many :posts, dependent: :destroy
    has_many :users, through: :posts
    #   belongs_to :user
end
