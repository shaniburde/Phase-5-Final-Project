class ClosetItemsController < ApplicationController

    def index 
        closet = @current_user.closet_items
        render json: closet, status: :ok
    end

    def show 
        closet_item = find_closet_item
        render json: closet_item, status: :ok
    end

    def update 
        closet_item = find_closet_item
        closet_item.update!(closet_item_params)
        render json: closet_item, status: :ok
    end

    def create 
        closet_item = ClosetItem.create!(closet_item_params)
        render json: closet_item, status: :created
    end

    def destroy 
        closet_item = find_closet_item
        closet_item.destroy
        head :no_content
    end

    private 

    def find_closet_item
        ClosetItem.find(params[:id])
    end

    def closet_item_params 
        params.permit(:image, :color, :description, :brand, :date_purchased, :purchase_price, :item_category_id, :user_id)
    end
    
end

