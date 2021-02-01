class Api::ItemsController < ApplicationController
  before_action :set_item,  only: [:update,:destroy] 
  # before_action :authenticate_user!
  before_action :admin_only, only: [:update, :create, :destroy]


  def index
    render json: Item.all
  end

  def show
    render json: Item.find(params[:id])
  end

  def create 
    item = Item.new(item_params)
    if item.save 
      render json: item  
    else
      render json: item.errors, status: 422
      end
  end

  def destroy
    @item.destroy 
  end 

  private 

  def set_item
    @item = Item.find(params[:id])
  end

  def item_params
    params.require(:item).permit(:name, :price)
  end
end
