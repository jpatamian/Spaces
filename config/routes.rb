Rails.application.routes.draw do
  root 'static_pages#index'

  devise_for :users

  namespace :api do
    namespace :v1  do
      resources :places
    end
  end

  resources :places
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
