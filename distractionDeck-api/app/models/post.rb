class Post < ApplicationRecord
    belongs_to :user
    belongs_to :column
    has_many :hastags
    has_many :comments
end