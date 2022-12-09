/* eslint-disable no-console */
import MainPage from '../../pages/main-page';
import {Route, Routes} from 'react-router-dom';
import NotFoundPage from '../../pages/not-found-page';
import {AppRoute, AuthorizationStatus} from '../../const';
import SignInPage from '../../pages/sign-in-page';
import MyListPage from '../../pages/my-list-page';
import FilmPage from '../../pages/film-page';
import AddReviewPage from '../../pages/add-review-page';
import PlayerPage from '../../pages/player-page';
import PrivateRoute from '../../components/private-route';
import { useAppSelector } from '../../hooks';
import {selectAuthorizationStatus, selectFilm, selectFilms, selectFilmsLoading} from '../../store/selector';
import LoadingScreen from '../../pages/loading-page';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import { HelmetProvider } from 'react-helmet-async';

type Props={
  title: string;
  genre: string;
  releaseData: number;
}

function App({title, genre, releaseData} : Props): JSX.Element {
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);

  const films = useAppSelector(selectFilms);
  const isFilmsLoading = useAppSelector(selectFilmsLoading);
  const film = useAppSelector(selectFilm);
  console.log(film);
  if (authorizationStatus === AuthorizationStatus.Unknown || isFilmsLoading) {
    <LoadingScreen />;
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage title={title} genre={genre} releaseData={releaseData} />}
          />
          <Route
            path={AppRoute.SignIn}
            element={<SignInPage />}
          />
          <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute
                authorizationStatus={authorizationStatus}
              >
                <MyListPage films={films} />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Film}
            element={<FilmPage film = {films[0]} films = {films} />}
          />
          <Route
            path={AppRoute.AddReview}
            element={<AddReviewPage film ={films[0]} />}
          />
          <Route
            path={AppRoute.Player}
            element={<PlayerPage film={films[0]} />}
          />
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}
export default App;
