import {useState, useRef, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Film} from '../types/film-type';
import VideoPlayer from './video-player-component';

type Props = {
film: Film;
}
const TYME_DELAY = 1000;

function FilmCard ({film}: Props): JSX.Element {
  const [, setActiveId] = useState<number | undefined>(undefined);
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    if (playing) {
      const timeout = setTimeout(() =>
      {
        if (videoRef.current !== null) {
          videoRef.current.play();
        }
      }, TYME_DELAY);
      return () => {
        clearTimeout(timeout);
      };
    }
    videoRef.current.load();

  }, [playing]);
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

  const handleMouseOver = () => {
    setPlaying(true);
  };

  const handleMouseOut = () => {
    setPlaying(false);
  };

  const {name, posterImage, previewVideoLink} = film;
  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <Link to="/films/:id" className="small-film-card__link">
        <div className="small-film-card__image">
          <VideoPlayer src={previewVideoLink} poster={posterImage} ref={videoRef} />
        </div>
        <h3 className="small-film-card__title">{name}</h3>
      </Link>
    </article>
  );
}
export default FilmCard;
