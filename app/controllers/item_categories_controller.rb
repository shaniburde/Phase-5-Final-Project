class ItemCategoriesController < ApplicationController
    def index 
        item_categories = ItemCategory.all
        render json: item_categories, status: :ok
    end

    def show 
        item_category = find_item_category
        render json: item_category, status: :ok
    end

    def update 
        item_category = find_item_category
        item_category.update!(item_category_params)
        render json: item_catgeory, status: :ok
    end

    def create 
        item_category = ItemCategory.create!(item_category_params)
        render json: item_category, status: :created
    end

    def destroy 
        item_category = find_item_category
        item_category.destroy
        head :no_content
    end

    private 

    def find_item_category
        ItemCategory.find(params[:id])
    end

    def item_category_params 
        params.permit(:item_type)
    end
end
