import '../styles/App.scss';
import logo from '../images/logo.png';

const Header = (props) => {
  return (
    <header>
      <img src={logo} alt='Logo de Rick y Morty'></img>
    </header>
  );
};
export default Header;
