import React, {ChangeEvent, FormEvent, useState} from 'react';
import { useParams } from 'react-router-dom';
import { MIN_COMMENT_LENGTH } from '../const';
import { useAppDispatch } from '../hooks';
import { addNewCommentAction } from '../store/api-actions';

function AddComment () : JSX.Element {
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
          <input className="rating__input" id="star-10" type="radio" name="rating" value="10" onChange={handleRatingChange} />
          <label className="rating__label" htmlFor="star-10">Rating 10</label>
          <input className="rating__input" id="star-9" type="radio" name="rating" value="9" onChange={handleRatingChange} />
          <label className="rating__label" htmlFor="star-9">Rating 9</label>
          <input className="rating__input" id="star-8" type="radio" name="rating" value="8" onChange={handleRatingChange} />
          <label className="rating__label" htmlFor="star-8">Rating 8</label>
          <input className="rating__input" id="star-7" type="radio" name="rating" value="7" onChange={handleRatingChange} />
          <label className="rating__label" htmlFor="star-7">Rating 7</label>
          <input className="rating__input" id="star-6" type="radio" name="rating" value="6" onChange={handleRatingChange} />
          <label className="rating__label" htmlFor="star-6">Rating 6</label>
          <input className="rating__input" id="star-5" type="radio" name="rating" value="5" onChange={handleRatingChange} />
          <label className="rating__label" htmlFor="star-5">Rating 5</label>
          <input className="rating__input" id="star-4" type="radio" name="rating" value="4" onChange={handleRatingChange} />
          <label className="rating__label" htmlFor="star-4">Rating 4</label>
          <input className="rating__input" id="star-3" type="radio" name="rating" value="3" onChange={handleRatingChange} />
          <label className="rating__label" htmlFor="star-3">Rating 3</label>
          <input className="rating__input" id="star-2" type="radio" name="rating" value="2" onChange={handleRatingChange} />
          <label className="rating__label" htmlFor="star-2">Rating 2</label>
          <input className="rating__input" id="star-1" type="radio" name="rating" value="1" onChange={handleRatingChange} />
          <label className="rating__label" htmlFor="star-1">Rating 1</label>
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
          <button className="add-review__btn"
            type="submit"
            disabled={formData.reviewText.length < MIN_COMMENT_LENGTH || formData.rating === '' || formDisabled}
          >
              Post
          </button>
        </div>
      </div>
    </form>
  );
}
export default AddComment;
