import '../styles/App.scss';
import '../styles/core/_reset.scss';
import { useState, useEffect } from 'react';
import api from '../services/charactersApi';
import Header from './Header';
import Footer from './Footer';
import CharacterList from './CharacterList';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    api.getCharactersFromApi().then((initialData) => {
      setData(initialData);
    });
  }, []);

  return (
    <div className='page'>
      <Header></Header>
      <main>
        <section>
          <form className='form_search'>
            <label className='' htmlFor=''>
              ¿Que personaje quieres ver?
            </label>
            <input className='' type='text' name='' id='' />
          </form>
        </section>
        <section>
          <CharacterList data={data} />
        </section>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
