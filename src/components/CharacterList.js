import CharacterItem from './CharacterItem';

function CharacterList(props) {
  const html =
    props.data.length !== 0 ? (
      props.data.map((characterData) => (
        <li key={characterData.id} className='card__container--li'>
          <CharacterItem characterData={characterData}></CharacterItem>
        </li>
      ))
    ) : (
      <section className='section__notFound'>
        <h2 className='section__notFound--title'>
          Ops!!! Personaje no encontrado ¡Prueba de nuevo!
        </h2>
      </section>
    );
  return <ul className='card__container--ul notFound'>{html}</ul>;
}
export default CharacterList;
