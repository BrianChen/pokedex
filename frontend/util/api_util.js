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
