class OutfitsController < ApplicationController

    def index 
       outfits = @current_user.outfits
       render json: outfits, status: :ok
    end

    def show 
        outfit = find_outfit
        render json: outfit, status: :ok
    end

    def update 
        outfit = find_outfit
        outfit.update!(outfit_params)
        render json: outfit, status: :ok
    end

    def create 
        outfit = Outfit.create!(outfit_params)
        render json: outfit, status: :created
    end

    def destroy 
        outfit = find_outfit
        outfit.destroy  
        head :no_content
    end

    private 

    def find_outfit
        @current_user.outfits.find(params[:id])
    end

    def outfit_params 
        params.permit(:outfit_category_id, :nickname)
    end

end
