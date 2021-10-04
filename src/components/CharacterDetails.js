import { Link } from 'react-router-dom';
import arrow from '../images/flecha-curva.png';
import CharacterNotFound from './CharacterNotFound';
function CharacterDetails(props) {
  if (props.selectedCharacter === undefined) {
    return <CharacterNotFound></CharacterNotFound>;
  } else {
    return (
      <div className='characterContainer'>
        <section className='section__intro'>
          <h2 className='section__intro--title'>
            {props.selectedCharacter.name}
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
            src={props.selectedCharacter.image}
            alt={props.selectedCharacter.name}
          />
          <ul className='section__info--ul'>
            <li>Especie: {props.selectedCharacter.species}</li>
            <li>Planeta de origen: {props.selectedCharacter.origin}</li>
            <li>Número de episodios: {props.selectedCharacter.episodes}</li>
            <li>: {props.selectedCharacter.status}</li>
          </ul>
        </section>
      </div>
    );
  }
}
export default CharacterDetails;
