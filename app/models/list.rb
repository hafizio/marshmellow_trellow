class List < ActiveRecord::Base
  attr_accessible :board_id, :title
  belongs_to :board, dependent: :destroy
  has_many :cards
end
