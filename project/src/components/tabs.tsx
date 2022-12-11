import {useState} from 'react';
import {Link} from 'react-router-dom';
import {Comment} from '../types/comment-type';
import {Film} from '../types/film-type';
import DetailsTab from './details-tab';
import OverviewTab from './overview-tab';
import ReviewsTab from './reviews-tab';

type Props={
  film: Film;
  comments: Comment[];
}

enum Tabs {
  Overview,
  Details,
  Reviews
}

function FilmTabs ({film, comments}: Props) : JSX.Element {
  const [selectedTab, setSelectedTab] = useState<Tabs>(Tabs.Overview);

  const handleOverviewClick = () => {
    setSelectedTab(Tabs.Overview);
  };

  const handleDetailsClick = () => {
    setSelectedTab(Tabs.Details);
  };

  const handleReviewsClick = () => {
    setSelectedTab(Tabs.Reviews);
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className="film-nav__item film-nav__item--active">
            <Link to ="#" className="film-nav__link" onClick={handleOverviewClick}>Overview</Link>
          </li>
          <li className="film-nav__item">
            <Link to ="#" className="film-nav__link" onClick={handleDetailsClick}>Details</Link>
          </li>
          <li className="film-nav__item">
            <Link to ="#" className="film-nav__link" onClick={handleReviewsClick}>Reviews</Link>
          </li>
        </ul>
      </nav>
      <div>
        {selectedTab === Tabs.Overview && <OverviewTab film={film} />}
        {selectedTab === Tabs.Details && <DetailsTab film={film} />}
        {selectedTab === Tabs.Reviews && <ReviewsTab />}
      </div>
    </div>
  );
}
export default FilmTabs;
