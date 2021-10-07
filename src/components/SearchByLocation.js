function SearchByLocation(props) {
  return (
    <>
      <label className='form__search--labelName' htmlFor='location'>
        Filtrar por localización
      </label>
      <input
        className='form__search--inputName'
        type='text'
        name='location'
        id='location'
        value={props.searchLocation}
        onChange={props.handleSearchLocation}
      />
    </>
  );
}
export default SearchByLocation;
