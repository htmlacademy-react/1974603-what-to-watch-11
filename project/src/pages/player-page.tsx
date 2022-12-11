import {MouseEvent, useRef, useState } from 'react';
import Loading from '../components/loading';
import { useAppSelector } from '../hooks';
import { selectFilm } from '../store/selector';

const PlayerStyle = {
  left: '30%'
};

function PlayerPage () : JSX.Element {
  const film = useAppSelector(selectFilm);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const onPlayClick = (evt : MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    if (!playing) {
      videoRef.current?.play();
      setPlaying(true);
    }
    videoRef.current?.pause();
    setPlaying(false);
  };

  const onExitClick = (evt : MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
  };
  const onFullScreenClick = (evt : MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    videoRef.current?.requestFullscreen();
  };

  if (!film) {
    return <Loading />;
  }

  return (
    <div className="player">
      <video src="#" className="player__video" poster={film.posterImage} ref={videoRef} />
      <button type="button" className="player__exit" onClick={onExitClick}>Exit</button>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100" />
            <div className="player__toggler" style= {PlayerStyle}>Toggler</div>
          </div>
          <div className="player__time-value">{film.runTime}</div>
        </div>
        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={onPlayClick}>
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s" />
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>
          <button type="button" className="player__full-screen" onClick={onFullScreenClick}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen" />
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default PlayerPage;
