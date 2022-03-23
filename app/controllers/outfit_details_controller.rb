class OutfitDetailsController < ApplicationController
    def index 
        outfit_details = OutfitDetail.all
        render json: outfit_details, status: :ok
    end

    def show 
        outfit_details = find_outfit_details
        render json: outfit_details , status: :ok
    end

    def update 
        outfit_details  = find_outfit_details
        outfit_details .update!(outfit_params)
        render json: outfit_details , status: :ok
    end

    def create 
        outfit_details = OutfitDetail.create!(outfit_details_params)
        render json: outfit_details, status: :created
    end

    def destroy 
        outfit_details = find_outfit_details
        outfit_details .destroy  
        head :no_content
    end

    private 

    def find_outfit_details
        @current_user.outfit_details.find(params[:id])
    end

    def outfit_details_params 
        params.permit(:outfit_id, :closet_item_id)
    end

end
