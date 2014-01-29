class BoardsController < ApplicationController
  before_filter :authenticate_user!
end
