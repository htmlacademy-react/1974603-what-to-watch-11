import {Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import { useAppSelector } from '../../hooks';
import {selectAuthorizationStatus, selectFilmsLoading} from '../../store/selector';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import { HelmetProvider } from 'react-helmet-async';
import Loading from '../loading/loading';
import PrivateRoute from '../private-route/private-route';
import MainPage from '../../pages/main-page/main-page';
import SignInPage from '../../pages/sign-in-page/sign-in-page';
import MyListPage from '../../pages/my-list-page/my-list-page';
import FilmPage from '../../pages/film-page/film-page';
import AddReviewPage from '../../pages/add-review-page/add-review-page';
import PlayerPage from '../../pages/player-page/player-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const isFilmsLoading = useAppSelector(selectFilmsLoading);

  if (authorizationStatus === AuthorizationStatus.Unknown || isFilmsLoading) {
    return (
      <Loading />
    );
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage />}
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
                <MyListPage />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Film}
            element={<FilmPage />}
          />
          <Route
            path={AppRoute.AddReview}
            element={<AddReviewPage />}
          />
          <Route
            path={AppRoute.Player}
            element={<PlayerPage />}
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
