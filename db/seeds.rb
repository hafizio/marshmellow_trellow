# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
#

ActiveRecord::Base.transaction do
  testuser = User.create!(email: "testuser@example.com",
                          username: "testuser",
                          password: "password")

  3.times do |i|
    board = testuser.boards.create!(title: "Board ##{i}")

    3.times do |j|
      list = board.lists.create!(title: "List ##{j}")
      5.times do |card_i|
        card = list.cards.create!(text: "This is a card.  \
                                  It was created as card #{card_i}")
      end
    end
  end
end
