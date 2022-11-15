import FilmCardComponent from './film-card-component';
import {FilmType} from '../types/film-type';


type Props = {
  films: FilmType[];
}

function FilmsListComponent({films}: Props): JSX.Element {

  return (
    <div className="catalog__films-list">
      {films.map((film) => (<FilmCardComponent key={film.id} film={film} />))}
    </div>
  );
}

export default FilmsListComponent;
