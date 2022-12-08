import { useAppSelector } from '../hooks';
import { selectNewComment } from '../store/selector';

function ReviewsTab () : JSX.Element {
  const comment = useAppSelector(selectNewComment);

  return(
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        <div className="review">
          <blockquote className="review__quote">
            <p className="review__text">{comment?.comment}</p>
            <footer className="review__details">
              <cite className="review__author">{comment?.user.name}</cite>
              <time className="review__date" dateTime={comment?.date}>{comment?.date}</time>
            </footer>
          </blockquote>
          <div className="review__rating">{comment?.rating}</div>
        </div>
      </div>
    </div>
  );
}

export default ReviewsTab;
