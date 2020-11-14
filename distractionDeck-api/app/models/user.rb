class User < ApplicationRecord
    has_many :columns
    has_many :posts
    #has_many :columns, through: :posts
    # has_many :posts, through: :columns

  after_create :column_init

  # bcrypt encryption for the usr password
  has_secure_password

  # validates the email submitted format
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i.freeze

  # standard validations
  validates :name, presence: true, length: { minimum: 5 }
  validates :username, presence: true, length: { minimum: 5 }

  # converts email to downcase  before saving it inorder to prevent inconsistency
  before_save { email.downcase! }

  # must have psw with a min. length of 5 allows nil psw when updating profile but not psw
  validates :password, presence: true, length: { minimum: 5 }, allow_nil: false
  validates :email, presence: true, length: { maximum: 255 }, format: { with: VALID_EMAIL_REGEX }, uniqueness: { case_sensitive: false }

  # auto generate columns only when a new user is created
  def column_init
    if columns.empty?
      columns.new(name: 'Home').save
      columns.new(name: 'Notifications').save
      columns.new(name: 'User').save
      columns.new(name: 'Likes').save
      columns.new(name: 'Mentions').save
      columns.new(name: 'Followers').save
      columns.new(name: 'Trending').save
      columns.new(name: 'Messages').save
      columns.new(name: 'Scheduled').save
    end
  end
end
