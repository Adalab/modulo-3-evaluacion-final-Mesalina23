import '../styles/App.scss';
import '../styles/core/_reset.scss';
import Header from './Header';
import Footer from './Footer';
function App() {
  return (
    <div className='page'>
      <Header></Header>
      <main>
        <section>
          <form>
            <label className='' htmlFor=''>
              ¿Que personaje quieres ver?
            </label>
            <input className='' type='text' name='' id='' />
          </form>
        </section>
        <section>
          <ul>
            <li>
              <a href=''></a>
              <img className='' src='' alt='' title='' />
            </li>
          </ul>
        </section>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
