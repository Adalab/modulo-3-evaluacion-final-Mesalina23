import '../styles/App.scss';
import '../styles/core/_reset.scss';
import { useState, useEffect } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import api from '../services/charactersApi';
import ls from '../services/ls';
import Header from './Header';
import Footer from './Footer';
import CharacterList from './CharacterList';
import CharacterSearch from './CharacterSearch';
import CharacterDetails from './CharacterDetails';
import PageNotFound from './PageNotFound';

function App() {
  const [data, setData] = useState(ls.get('data', []));
  const [searchName, setSearchName] = useState(ls.get('searchName', ''));
  const [searchSpecie, setSearchSpecie] = useState(
    ls.get('searchSpecie', 'all')
  );
  const [searchStatus, setSearchStatus] = useState(
    ls.get('searchStatus', 'all')
  );

  const [searchLocation, setSearchLocation] = useState(
    ls.get('searchLocation', '')
  );

  useEffect(() => {
    api.getCharactersFromApi().then((initialData) => {
      setData(initialData);
    });
  }, []);
  useEffect(() => {
    ls.set('data', data);
  }, [data]);
  useEffect(() => {
    ls.set('searchName', searchName);
  }, [searchName]);
  useEffect(() => {
    ls.set('searchSpecie', searchSpecie);
  }, [searchSpecie]);
  useEffect(() => {
    ls.set('searchStatus', searchStatus);
  }, [searchStatus]);

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
  const handleResetButton = (ev) => {
    localStorage.clear();
    window.location.reload();
  };
  const handleSearchLocation = (ev) => {
    setSearchLocation(ev.currentTarget.value);
  };

  const routeData = useRouteMatch('/character/:id');

  const characterId = routeData !== null ? routeData.params.id : '';

  const selectedCharacter = data.find(
    (character) => character.id === parseInt(characterId)
  );
  const filteredData = data

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
    )
    .filter((character) =>
      character.location
        .toLocaleLowerCase()
        .includes(searchLocation.toLocaleLowerCase())
    )
    .sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });

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
                handleResetButton={handleResetButton}
                searchLocation={searchLocation}
                handleSearchLocation={handleSearchLocation}
              />
            </section>
            <section></section>
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
