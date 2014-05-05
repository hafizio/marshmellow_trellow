json.(board, :id, :title)

json.lists board.lists do |list|
  json.partial! list
end
