Rails.application.routes.draw do
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    passwords: 'users/passwords',
    registrations: 'users/registrations'
  }
  resources :contacts

  require 'sidekiq/web'
  mount Sidekiq::Web => '/sidekiq'

  root to: 'contacts#index'
end
