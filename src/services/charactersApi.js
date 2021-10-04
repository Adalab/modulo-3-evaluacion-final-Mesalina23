function getCharactersFromApi() {
  return fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then((json) => {
      return json.results
        .map((character) => {
          return {
            id: character.id,
            name: character.name,
            species: character.species,
            image: character.image,
            origin: character.origin.name,
            episodes: character.episode.length,
            status: character.status,
          };
        })
        .sort();
    });
}
const objetToExport = {
  getCharactersFromApi: getCharactersFromApi,
};
export default objetToExport;
