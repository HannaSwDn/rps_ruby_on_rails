Rails.application.routes.draw do
  resources :homepage

  root controller: :homepage, action: :index
end
