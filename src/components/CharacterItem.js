function CharacterItem(props) {
  return (
    <div className='card_container'>
      <img
        className='card__image'
        src={props.characterData.image}
        alt={`Foto de ${props.characterData.name}`}
        title={`Foto de ${props.characterData.name}`}
      />
      <h4 className='card__title'>{props.characterData.name}</h4>
      <p className='card__specie'>{props.characterData.specie}</p>
    </div>
  );
}
export default CharacterItem;
