import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks';
import { changeGenreAction } from '../store/action';

function GenreList () : JSX.Element {
  const dispatch = useAppDispatch();
  const genre = useAppSelector((state) => state.genre);
  const films = useAppSelector((state) => state.films);
  const filters = Array.from(new Set((films.map((item) => item.genre))));

  return(
    <ul className="catalog__genres-list">
      <li className={`catalog__genres-item ${genre === 'All genres' ? 'catalog__genres-item--active' : ''}`}>
        <Link to ="/" className="catalog__genres-link" onClick={() => dispatch(changeGenreAction())}>All genres</Link>
      </li>
      {filters.map((item) => (
        <li key={item} className={`catalog__genres-item ${genre === item ? 'catalog__genres-item--active' : ''}`}>
          <Link to ="/" className="catalog__genres-link" onClick={() => dispatch(changeGenreAction())}>{genre}</Link>
        </li>
      ))}
    </ul>
  );
}

export default GenreList;
