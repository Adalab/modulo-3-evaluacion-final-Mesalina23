import Reset from './Reset';
import SearchByFilters from './SearchByFilters';
import SearchByname from './SearchByName';
import SearchByLocation from './SearchByLocation';

function CharacterSearch(props) {
  return (
    <>
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
        <SearchByLocation
          searchLocation={props.searchLocation}
          hanleSearchLocation={props.hanleSearchLocation}
        />
      </form>
      <Reset handleResetButton={props.handleResetButton} />
    </>
  );
}
export default CharacterSearch;
