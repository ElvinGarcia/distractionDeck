class User < ApplicationRecord
    # bcrypt encryption for the usr password
    has_secure_password
    
        # validates the email submitted format
        VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i.freeze
        
        # standard validations
        validates :name, presence: true, length: { minimum: 5 }
        
        # converts email to downcase  before saving it inorder to prevent inconsistency
        before_save { email.downcase! }
        
    #must have psw with a min. length of 5 allows nil psw when updating profile but not psw
   validates :password, presence: true, length: {minimum: 5}, allow_nil: false
   validates :email, presence: true, length: {maximum: 255}, format: {with: VALID_EMAIL_REGEX}, uniqueness: {case_sensitive: false}
    attr_accessor :token
   

end
