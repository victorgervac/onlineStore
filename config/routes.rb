Rails.application.routes.draw do
  # get 'items/index'
  # get 'items/show'
  # post 'items/create'
  
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
  #   resources :things
  # end
  resources :items 
  end
end
