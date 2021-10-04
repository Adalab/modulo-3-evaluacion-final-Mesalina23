import SearchByFilters from './SearchByFilters';
import SearchByname from './SearchByName';
function CharacterSearch(props) {
  return (
    <form className='form__search'>
      <SearchByname
        searchName={props.searchName}
        handleSearchName={props.handleSearchName}
      />

      <SearchByFilters
        searchSpecie={props.searchSpecie}
        handleSearchSpecie={props.handleSearchSpecie}
        searchStatus={props.searchStatus}
        handleSearchStatus={props.handleSearchStatus}
      />
    </form>
  );
}
export default CharacterSearch;
