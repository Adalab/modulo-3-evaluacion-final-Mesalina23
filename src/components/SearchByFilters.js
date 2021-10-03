function SearchByFilters(props) {
  console.log(props);

  return (
    <>
      <label className='form__search--labelSelect' htmlFor='filters'>
        Filtros:
      </label>
      <select
        className='form__search--inputSearch'
        name='filters'
        id='filters'
        value={props.searchFilters}
        onChange={props.handleSearchFilters}
      >
        <option value='all'>Todos</option>
        <option value='specie'>Especie</option>
        <option value='origin'>Planeta de origen</option>
      </select>
    </>
  );
}
export default SearchByFilters;
