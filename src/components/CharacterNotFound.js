import image from '../images/notFound.jpg';
import { Link } from 'react-router-dom';
import arrow from '../images/flecha-curva.png';

function CharacterNotFound() {
  return (
    <div className='characterContainer'>
      <section className='section__intro'>
        <h2 className='section__intro--title'>
          Ops!!! Personaje no encontrado ¡Prueba de nuevo!
        </h2>
        <Link to='/'>
          <img
            className='section__intro--img'
            src={arrow}
            alt='Flecha para volver a la página principal'
          />
        </Link>
      </section>
      <section className='section__info'>
        <img
          className='section__info--img'
          src={image}
          alt='Imagen de Rick y Morty'
        />
      </section>
    </div>
  );
}
export default CharacterNotFound;
