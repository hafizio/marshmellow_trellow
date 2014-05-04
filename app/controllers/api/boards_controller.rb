class Api::BoardsController < ApplicationController
  before_filter :authenticate_user!

  def show
    @board = Board.where(id: params[:id]).includes(lists: [:cards])
    render json: @board
  end
end
