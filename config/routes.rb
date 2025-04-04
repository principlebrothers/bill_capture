Rails.application.routes.draw do
  resources :invoices
  resources :companies, except: [ :show ] do
    resources :checks, only: [ :new, :create ]
  end
  resources :checks, only: [ :index ]
  root "companies#index"
  get "up" => "rails/health#show", as: :rails_health_check
end
