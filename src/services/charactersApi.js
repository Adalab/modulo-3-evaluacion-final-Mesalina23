function getCharactersFromApi() {
  return fetch(
    '//raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json'
  )
    .then((response) => response.json())
    .then((json) => {
      return json.results.map((character) => {
        return {
          id: character.id,
          name: character.name,
          specie: character.species,
          image: character.image,
          origin: character.origin.name,
          episode: character.episode,
          status: character.status,
        };
      });
    });
}
const objetToExport = {
  getCharactersFromApi: getCharactersFromApi,
};
export default objetToExport;
