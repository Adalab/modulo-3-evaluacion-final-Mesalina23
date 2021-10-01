//import '../styles/App.scss';
import logo from '../images/logo.png';

const Header = () => {
  return (
    <header className='header__container'>
      <img
        className='header__container--img'
        src={logo}
        alt='Logo de Rick y Morty'
      ></img>
    </header>
  );
};
export default Header;
