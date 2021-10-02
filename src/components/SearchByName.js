function SearchByname(props) {
  return (
    <>
      <label className='form__search--labelName' htmlFor='name'>
        ¿Que personaje quieres ver?
      </label>
      <input
        className='form__search--inputName'
        type='text'
        name='name'
        id='name'
        value={props.searchName}
        onChange={props.handleSearchName}
      />
    </>
  );
}
export default SearchByname;
