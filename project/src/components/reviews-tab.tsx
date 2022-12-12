import { formatDate } from '../const';
import { useAppSelector } from '../hooks';
import { selectComments} from '../store/selector';

function ReviewsTab () : JSX.Element {
  const comments = useAppSelector(selectComments);

  return(
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {comments.map((comment) => (
          <div className="review" key={comment.id}>
            <blockquote className="review__quote">
              <p className="review__text">{comment?.comment}</p>
              <footer className="review__details">
                <cite className="review__author">{comment?.user.name}</cite>
                <time className="review__date" dateTime={comment?.date}>{formatDate((comment?.date))}</time>
              </footer>
            </blockquote>
            <div className="review__rating">{comment?.rating}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReviewsTab;
