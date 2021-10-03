function CharacterDetails(props) {
  return (
    <section>
      <img
        className='character__img'
        src={props.selectedCharacter.image}
        alt={props.selectedCharacter.name}
      />
      <ul className='character__ul'>
        <li>Nombre: {props.selectedCharacter.name}</li>
        <li>Especie: {props.selectedCharacter.species}</li>
        <li>Planeta de origen: {props.selectedCharacter.origin}</li>
        <li>Número de episodios: {props.selectedCharacter.episodes}</li>
        <li>¿Vivo?: {props.selectedCharacter.status}</li>
      </ul>
    </section>
  );
}
export default CharacterDetails;
