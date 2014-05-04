class Card < ActiveRecord::Base
  attr_accessible :list_id, :text
  belongs_to :list, dependent: :destroy
end
