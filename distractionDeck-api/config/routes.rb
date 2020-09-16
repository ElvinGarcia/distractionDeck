Rails.application.routes.draw do

  namespace :api do
   namespace :v1 do
    resources :posts
    resources :columns
    resources :users
    resources :hastags
    resources :comments
   end
 end

  resources :login, to: 'sessions#login'
  get '/auth/:provider/callback', to: 'sessions#login'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
