Marshmellow::Application.routes.draw do
  devise_for :users

  root :to => "static_pages#index"

  namespace :api, defaults: { format: :json } do
    resources :boards, only: [:show, :index, :create, :update]
  end

end
