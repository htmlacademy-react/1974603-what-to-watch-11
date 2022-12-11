import {useState, useRef, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { TYME_DELAY } from '../const';
import {Film} from '../types/film-type';
import VideoPlayer from './video-player';

type Props = {
film: Film;
}

function FilmCard ({film}: Props): JSX.Element {
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
    setPlaying(true);
  };

  const handleMouseLeave = () => {
    setPlaying(false);
  };

  const {name, previewImage, previewVideoLink} = film;
  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Link to= {`/films/${film.id}`} className="small-film-card__link">
        <div className="small-film-card__image">
          <VideoPlayer src={previewVideoLink} poster={previewImage} ref={videoRef} />
        </div>
        <h3 className="small-film-card__title">{name}</h3>
      </Link>
    </article>
  );
}
export default FilmCard;
