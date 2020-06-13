Rails.application.routes.draw do

  post :login, to: 'sessions#login' 
  resources :socials
  resources :columns
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
