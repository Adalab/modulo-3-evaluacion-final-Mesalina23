import CharacterItem from './CharacterItem';

function CharacterList(props) {
  const html = props.data.map((characterData) => (
    <li key={characterData.id} className='card__container--li'>
      <CharacterItem characterData={characterData}></CharacterItem>
    </li>
  ));
  return <ul className='card__container--ul'>{html}</ul>;
}
export default CharacterList;
