import { Link } from 'react-router-dom';
function CharacterItem(props) {
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
        <p className='card__article--specie'>{props.characterData.species}</p>
        <p>{props.characterData.status}</p>
      </article>
    </Link>
  );
}
export default CharacterItem;
