Rails.application.routes.draw do
  root 'places#index'
  devise_for :users

  resources :places

  namespace :api do
    namespace :v1  do
      resources :places
    end
  end 
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
