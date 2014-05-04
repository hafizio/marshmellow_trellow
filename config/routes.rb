Marshmellow::Application.routes.draw do
  devise_for :users

  root :to => "static_pages#index"

  namespace :api do
    resources :boards, only: :show
  end

end
