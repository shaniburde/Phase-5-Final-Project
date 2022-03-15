Rails.application.routes.draw do
  
  resources :outfit_details
  resources :outfits
  resources :outfit_categories
  resources :closet_items
  resources :item_categories
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
