import CharacterItem from './CharacterItem';

function CharacterList(props) {
  const html = props.data.map((characterData) => (
    <li key={characterData.id}>
      <CharacterItem characterData={characterData}></CharacterItem>
    </li>
  ));
  return <ul>{html}</ul>;
}
export default CharacterList;
