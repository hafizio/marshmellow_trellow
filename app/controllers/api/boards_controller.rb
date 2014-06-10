class Api::BoardsController < ApplicationController
  before_filter :authenticate_user!

  def create
    @board = Board.new(params[:board])
    @board.user_id = current_user.id
    if @board.save!
      render json: @board
    else
      render json: { errors: @board.errors.full_messages }, status: 422
    end
  end

  def show
    @board = Board.where(id: params[:id]).includes(lists: [:cards]).first
  end

  def index
    @boards = current_user.boards.includes(lists: [:cards])
  end

  def update
    @board = Board.where(id: params[:id]).includes(lists: [:cards]).first

    if @board.update_attributes(params[:board])
      render json: @board
    else
      render json: { errors: @board.errors.full_messages }, status: 422
    end
  end
end
