import {FilmType} from '../types/film-type';

type Props = {
film: FilmType;
}

function FilmCardComponent ({film}: Props): JSX.Element {
  const {title, poster} = film;
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={poster} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{title}</a>
      </h3>
    </article>
  );
}
export default FilmCardComponent;
