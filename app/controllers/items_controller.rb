class ItemsController < ApplicationController
  before_action :set_item,  only: [:update,:destroy] 

  def index
    render json: Item.all
  end

  def show
    render json: Item.find(params[:id])
  end

  private 

  def set_item
    @item = Item.find(params[:id])
  end

  def item_params
    params.require(:item).permit(:name, :price)
  end
end
