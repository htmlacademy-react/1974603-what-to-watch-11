import {forwardRef,ForwardedRef } from 'react';
type Props = {
  src: string;
  poster: string;
}

function PreviewPlayer ({src, poster} : Props, ref: ForwardedRef<HTMLVideoElement>) : JSX.Element {

  return (
    <video className="player__video" poster={poster} ref={ref} muted>
      <source src={src}></source>
    </video>
  );
}
const VideoPlayer = forwardRef(PreviewPlayer);

export default VideoPlayer;
