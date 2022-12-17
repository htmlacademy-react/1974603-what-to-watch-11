import { Film } from '../../types/film-type';
import FilmCard from '../film-card/film-card';
type Props = {
  films: Film[];
}

function FilmsList({films}: Props): JSX.Element {
  return (
    <div className="catalog__films-list">
      {films.map((film: Film) => (<FilmCard key={film.id} film={film} />))}
    </div>
  );
}

export default FilmsList;
