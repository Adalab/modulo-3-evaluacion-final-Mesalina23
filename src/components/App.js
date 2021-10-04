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
import PageNotFound from './PageNotFound';

function App() {
  const [data, setData] = useState([]);
  const [searchName, setSearchName] = useState('');
  //const [searchFilters, setSearchFilters] = useState('all');
  const [searchSpecie, setSearchSpecie] = useState('all');
  const [searchStatus, setSearchStatus] = useState('all');

  useEffect(() => {
    api.getCharactersFromApi().then((initialData) => {
      setData(initialData);
    });
  }, []);
  //const handleSearchFilters = (ev) => {
  //setSearchFilters(ev.currentTarget.value);
  //};
  const handleSearchSpecie = (ev) => {
    setSearchSpecie(ev.currentTarget.value);
  };
  const handleSearchStatus = (ev) => {
    setSearchStatus(ev.currentTarget.value);
  };
  const handleSearchName = (ev) => {
    ev.preventDefault();
    setSearchName(ev.currentTarget.value);
  };
  const routeData = useRouteMatch('/character/:id');
  console.log(routeData);

  const characterId = routeData !== null ? routeData.params.id : '';
  console.log(characterId);

  const selectedCharacter = data.find(
    (character) => character.id === parseInt(characterId)
  );
  const filteredData = data
    .sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    })
    .filter((character) =>
      character.name
        .toLocaleLowerCase()
        .includes(searchName.toLocaleLowerCase())
    )
    .filter(
      (character) =>
        searchSpecie === 'all' || searchSpecie === character.species
    )
    .filter(
      (character) => searchStatus === 'all' || searchStatus === character.status
    );

  return (
    <div className='page'>
      <Header></Header>
      <main className='page__main'>
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
                searchSpecie={searchSpecie}
                handleSearchSpecie={handleSearchSpecie}
                searchStatus={searchStatus}
                handleSearchStatus={handleSearchStatus}
              />
            </section>
            <section>
              <CharacterList data={filteredData} />
            </section>
          </Route>
          <Route>
            <PageNotFound></PageNotFound>
          </Route>
        </Switch>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
