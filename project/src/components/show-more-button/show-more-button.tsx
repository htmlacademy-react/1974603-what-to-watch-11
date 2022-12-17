type Props = {
  onButtonClick: () => void;
}
function ShowMoreButton ({onButtonClick}:Props) : JSX.Element {
  return(
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={onButtonClick}>Show more</button>
    </div>
  );
}
export default ShowMoreButton;
