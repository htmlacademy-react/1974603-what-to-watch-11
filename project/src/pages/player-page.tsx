import Loading from '../components/loading';
import Player from '../components/player/player';
import { useAppSelector } from '../hooks';
import { selectFilm } from '../store/selector';

function PlayerPage () : JSX.Element {
  const film = useAppSelector(selectFilm);

  if (!film) {
    return <Loading />;
  }

  return (
    <Player name={film.name} link={film.videoLink} />
  );
}
export default PlayerPage;
