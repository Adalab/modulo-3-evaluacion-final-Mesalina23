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
        searchFilters={props.searchFilters}
        handleSearchFilters={props.handleSearchFilters}
      />
    </form>
  );
}
export default CharacterSearch;
