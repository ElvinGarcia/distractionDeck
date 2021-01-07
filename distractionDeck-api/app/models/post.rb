class Post < ApplicationRecord
    belongs_to :user
    belongs_to :column
    # accepts_nested_attributes_for :body, update_only: true, allow_destroy: true
    # validates :body, unique: true
    # has_many :hastags
    # has_many :comments

    before_validation :post_init



    def post_init
        column = self.column
        # column = user.columns.find_by(name: "Home")
        user = column.user
        # user = User.find(self.user_id)
        self.column = column
        self.user = user
    end

end