import { Link } from 'react-router-dom';
import alien from '../images/alien.png';
import brain from '../images/brain.png';
import heart from '../images/heartbeat.png';
import tomb from '../images/tombstone.png';
import unknown from '../images/question-mark.png';
function CharacterItem(props) {
  const specie = () => {
    if (props.characterData.species === 'Human') {
      return brain;
    } else if (props.characterData.species === 'Alien') {
      return alien;
    }
  };
  const status = () => {
    if (props.characterData.status === 'Alive') {
      return heart;
    } else if (props.characterData.status === 'Dead') {
      return tomb;
    } else {
      return unknown;
    }
  };
  return (
    <Link
      to={`./character/${props.characterData.id}`}
      className='card__container'
    >
      <img
        className='card__container--image'
        src={props.characterData.image}
        alt={`Foto de ${props.characterData.name}`}
        title={`Foto de ${props.characterData.name}`}
      />
      <article className='card__article'>
        <h4 className='card__article--title'>{props.characterData.name}</h4>
        <img
          src={specie()}
          alt={props.characterData.specie}
          className='card__article--img'
        ></img>
        <img
          src={status()}
          alt={props.characterData.status}
          className='card__article--img'
        ></img>
        <p></p>
      </article>
    </Link>
  );
}
export default CharacterItem;
