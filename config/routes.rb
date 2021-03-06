Rails.application.routes.draw do
  root 'static_pages#index'
  resources :places, only: [:index]

  devise_for :users
  resources :users

  namespace :api do
    namespace :v1  do
      resources :places do
        resources :reviews
      end
    end
  end

  namespace :api do
    namespace :v1  do
      resources :favorites, only: [:index, :show, :create]
    end
  end

  namespace :api do
    namespace :v1  do
      post '/meetups', to: "meetups#search"
    end
  end

  namespace :api do
    namespace :v1  do
      post '/yelps', to: "yelps#search"
    end
  end



  get "*path", to: "static_pages#index"


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
