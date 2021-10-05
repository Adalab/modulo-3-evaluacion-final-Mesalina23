import reset from '../images/reset.png';
function Reset(props) {
  return (
    <section className='reset'>
      <button
        type='reset'
        className='reset__button'
        onClick={props.handleResetButton}
      >
        <img src={reset} alt='Reset' className='reset__img'></img>
      </button>
    </section>
  );
}
export default Reset;
