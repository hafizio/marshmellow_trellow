json.(list, :id, :title)

json.cards list.cards do |card|
  json.partial! card
end
