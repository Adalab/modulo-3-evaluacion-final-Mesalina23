//import '../styles/App.scss';
import song from '../audio/loveMorty.mp3';
import logo from '../images/logo.png';

const Header = () => {
  return (
    <header className='header__container'>
      <img
        className='header__container--img'
        src={logo}
        alt='Logo de Rick y Morty'
      ></img>
      <div className='header__container--player'>
        <audio
          id='song'
          type='audio/mp3'
          autoPlay
          controls
          className='header__container--song'
        >
          {''}
          <source src={song} />
        </audio>
      </div>
    </header>
  );
};
export default Header;
