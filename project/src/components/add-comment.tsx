import React, {ChangeEvent, FormEvent, Fragment, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import { MIN_COMMENT_LENGTH, ratings } from '../const';
import { useAppDispatch } from '../hooks';
import { addNewCommentAction } from '../store/api-actions';
import { Film } from '../types/film-type';

type Props = {
  film: Film;
}

function AddComment ({film}: Props) : JSX.Element {
  const dispatch = useAppDispatch();
  const {id} = useParams();
  const [formDisabled, setFormDisabled] = useState(false);
  const [formData, setFormData] = useState({
    reviewText: '',
    rating: ''
  });

  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, rating: evt.target.value});
  };

  const handleReviewChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({...formData, reviewText: evt.target.value});
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setFormDisabled(true);

    if (!id) {
      return;
    }

    dispatch(addNewCommentAction({
      filmId: id,
      comment: formData.reviewText,
      rating: Number(formData.rating),
    }));

    setFormDisabled(false);
    setFormData({...formData, rating: '', reviewText:''});
  };

  return (
    <form action="#" className="add-review__form" onSubmit={handleSubmit}>
      <div className="rating">
        <div className="rating__stars">
          {ratings.map((number) => (
            <Fragment key={number}>
              <input className="rating__input" id={`star-${number}`} type="radio" name="rating" value={number} onChange={handleRatingChange} />
              <label className="rating__label" htmlFor={`star-${number}`}>Rating ${number}</label>
            </Fragment>
          ))}
        </div>
      </div>
      <div className="add-review__text">
        <textarea className="add-review__textarea"
          name="review-text"
          value={formData.reviewText}
          id="review-text"
          placeholder="Review text"
          onChange={handleReviewChange}
          disabled={formDisabled}
        />
        <div className="add-review__submit">
          <Link to={`/films/${film.id}`}>
            <button className="add-review__btn"
              type="submit"
              disabled={formData.reviewText.length < MIN_COMMENT_LENGTH || formData.rating === '' || formDisabled}
            >
              Post
            </button>
          </Link>
        </div>
      </div>
    </form>
  );
}
export default AddComment;
