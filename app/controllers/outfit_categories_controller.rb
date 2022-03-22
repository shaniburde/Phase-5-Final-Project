class OutfitCategoriesController < ApplicationController
    def index 
        categories = OutfitCategory.all 
        render json: categories, status: :ok
    end
end
