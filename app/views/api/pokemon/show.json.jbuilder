json.extract! @pokemon, :id, :name, :attack, :defense, :image_url, :moves, :poke_type
json.items @items, :id, :name, :pokemon_id, :price, :happiness, :image_url
