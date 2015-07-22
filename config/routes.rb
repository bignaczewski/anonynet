Rails.application.routes.draw do

  mount RailsAdmin::Engine => '/admins', as: 'rails_admin'

  resources :comments

  resources :posts, except: :show
  get 'show_comments' => 'posts#show_comments', as: :show_comments
  get 'hide_comments' => 'posts#hide_comments', as: :hide_comments
  post 'report_post' => 'posts#report_post', as: :report_post

  get '/change_locale/:locale', to: 'settings#change_locale', as: :change_locale

  resources 'contacts', only: [:new, :create]

  devise_for :users

  resources :users
  get 'like' => 'users#like'
  get 'unlike' => 'users#unlike'

  root 'home#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
