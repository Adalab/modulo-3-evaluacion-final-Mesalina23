import '../styles/App.scss';
import '../styles/core/_reset.scss';
import { useState, useEffect } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import api from '../services/charactersApi';
//import ls from '../services/ls';
import Header from './Header';
import Footer from './Footer';
import CharacterList from './CharacterList';
import CharacterSearch from './CharacterSearch';
import CharacterDetails from './CharacterDetails';
//import SearchByFilters from './SearchByFilters';
//import CharacterSearch from './CharacterSearch';

function App() {
  const [data, setData] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [searchFilters, setSearchFilters] = useState('all');
  //const [searchSpecie, setSearchSpecie] = useState('');
  //const [searchStatus, setSearchStatus] = useState('');

  useEffect(() => {
    api.getCharactersFromApi().then((initialData) => {
      setData(initialData);
    });
  }, []);
  const handleSearchFilters = (ev) => {
    setSearchFilters(ev.currentTarget.value);
  };
  const handleSearchName = (ev) => {
    ev.preventDefault();
    setSearchName(ev.currentTarget.value);
  };
  const routeData = useRouteMatch('/character/:id');
  const characterId = routeData !== null ? routeData.params.id : '';
  console.log(characterId);
  const selectedCharacter = data.find(
    (character) => character.id === parseInt(characterId)
  );
  console.log(selectedCharacter);
  const filteredData = data
    .filter((character) =>
      character.name
        .toLocaleLowerCase()
        .includes(searchName.toLocaleLowerCase())
    )
    .filter(
      (character) =>
        searchFilters === 'all' || character.filters === searchFilters
    );

  return (
    <div className='page'>
      <Header></Header>
      <main>
        <Switch>
          <Route path='/character/:id'>
            <section>
              <CharacterDetails
                selectedCharacter={selectedCharacter}
              ></CharacterDetails>
            </section>
          </Route>
          <Route exact path='/'>
            <section>
              <CharacterSearch
                searchName={searchName}
                handleSearchName={handleSearchName}
                searchFilters={searchFilters}
                handleSearchFilters={handleSearchFilters}
              />
            </section>
            <section>
              <CharacterList data={filteredData} />
            </section>
          </Route>
          <Route>
            <section> Oh! Página equivocada.</section>
          </Route>
        </Switch>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
