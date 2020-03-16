Rails.application.routes.draw do
  devise_for :users
  resources :artists, only: [:index, :show, :create]
  resources :songs, only: [:index, :create, :show, :destroy] 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
