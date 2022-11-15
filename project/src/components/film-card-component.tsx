import {useState} from 'react';
import {Link} from 'react-router-dom';
import {FilmType} from '../types/film-type';

type Props = {
film: FilmType;
}

function FilmCardComponent ({film}: Props): JSX.Element {
  const [, setActiveId] = useState<number | undefined>(undefined);

  const handleMouseEnter = () => {
    if (setActiveId) {
      setActiveId(film.id);
    }
  };

  const handleMouseLeave = () => {
    if (setActiveId) {
      setActiveId(undefined);
    }
  };

  const {name, posterImage} = film;
  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Link to="/films/:id" className="small-film-card__link">
        <div className="small-film-card__image">
          <img src={posterImage} alt={name} width="280" height="175" />
        </div>
        <h3 className="small-film-card__title">{name}</h3>
      </Link>
    </article>
  );
}
export default FilmCardComponent;
