# Load the Rails application.
require_relative 'application'
#
Rails.application.config.action_controller.forgery_protection_origin_check = false

# Initialize the Rails application.
Rails.application.initialize!
