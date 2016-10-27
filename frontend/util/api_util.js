export const fetchAllPokemon = success => {
  $.ajax({
    url: '/api/pokemon',
    success
  });
};

export const fetchPokemon = (pokeId, success) => {
  $.ajax({
    url: `/api/pokemon/${pokeId}`,
    success
  });
};

export const postPokemon = (pokemon, success) => {
  $.ajax({
    type: 'POST',
    url: '/api/pokemon',
    data: {pokemon},
    success
  });
};
