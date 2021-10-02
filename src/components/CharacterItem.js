function CharacterItem(props) {
  return (
    <div className='card__container'>
      <img
        className='card__container--image'
        src={props.characterData.image}
        alt={`Foto de ${props.characterData.name}`}
        title={`Foto de ${props.characterData.name}`}
      />
      <article className='card__article'>
        <h4 className='card__article--title'>{props.characterData.name}</h4>
        <p className='card__article--specie'>{props.characterData.specie}</p>
        <p>{props.characterData.status}</p>
      </article>
    </div>
  );
}
export default CharacterItem;
