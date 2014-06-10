class Api::ListsController < ApplicationController
  before_filter :authenticate_user!

  def update
    @list = List.where(id: params[:id]).includes(:cards).first
    if @list.update_attributes(params[:list])
      render json: @list
    else
      render json: { errors: @list.errors.full_messages }, status: 422
    end
  end
end
