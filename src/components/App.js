import '../styles/App.scss';
import '../styles/core/_reset.scss';
import { useState, useEffect } from 'react';
import api from '../services/charactersApi';
import Header from './Header';
import Footer from './Footer';
import CharacterList from './CharacterList';
//import CharacterSearch from './CharacterSearch';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    api.getCharactersFromApi().then((initialData) => {
      setData(initialData);
    });
  }, []);
  const [searchName, setSearchName] = useState('');
  const handleSearchName = (ev) => {
    ev.preventDefault();
    setSearchName(ev.currentTarget.value);
  };
  const filteredData = data.filter((character) =>
    character.name.toLocaleLowerCase().includes(searchName.toLocaleLowerCase())
  );
  return (
    <div className='page'>
      <Header></Header>
      <main>
        <section>
          <form className='form__search'>
            <label className='form__search--label' htmlFor='name'>
              ¿Que personaje quieres ver?
            </label>
            <input
              className='form__search--input'
              type='text'
              name='name'
              id='name'
              value={searchName}
              onChange={handleSearchName}
            />
          </form>
        </section>
        <section>
          <CharacterList data={filteredData} />
        </section>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
