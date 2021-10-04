function SearchByFilters(props) {
  console.log(props);

  return (
    <>
      <label className='form__search--labelSelect' htmlFor='species'>
        Filtrar por especie:
      </label>
      <select
        className='form__search--inputSearch'
        name='species'
        id='species'
        value={props.searchSpecie}
        onChange={props.handleSearchSpecie}
      >
        <option value='all'>Todos</option>
        <option value='Human'>Humano</option>
        <option value='Alien'>Alien</option>
      </select>
      <label className='form__search--labelSelect' htmlFor='status'>
        Filtrar por estado:
      </label>
      <select
        className='form__search--inputSearch'
        name='status'
        id='status'
        value={props.searchStatus}
        onChange={props.handleSearchStatus}
      >
        <option value='all'>Todos</option>
        <option value='Alive'>Vivo</option>
        <option value='Dead'>Muerto</option>
        <option value='unkown'>Desconocido</option>
      </select>
    </>
  );
}
export default SearchByFilters;
