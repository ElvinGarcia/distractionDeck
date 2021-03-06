class Post < ApplicationRecord
    belongs_to :user
    belongs_to :column
    # validates :body, unique: true
    # accepts_nested_attributes_for :body, update_only: true, allow_destroy: true
    # has_many :hastags
    # has_many :comments
    validates :body,
          :presence => {:message => "Post can't be blank." },
          :uniqueness => {:message => "Post already exists."},
          :length => { :maximum => 100, :message => "Must be less than 100 characters"}
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