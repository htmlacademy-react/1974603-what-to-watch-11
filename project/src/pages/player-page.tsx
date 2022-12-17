import Loading from '../components/loading/loading';
import Player from '../components/player/player';
import {useAppSelector} from '../hooks';
import {selectFilm, selectPromoFilm} from '../store/selector';

function PlayerPage () : JSX.Element {
  const film = useAppSelector(selectFilm);
  const promoFilm = useAppSelector(selectPromoFilm);

  if (!promoFilm) {
    return <Loading />;
  }

  if (!film) {
    return <Player name={promoFilm.name} link={promoFilm.videoLink} />;
  }

  return (
    <Player name={film.name} link={film.videoLink} />
  );
}
export default PlayerPage;
