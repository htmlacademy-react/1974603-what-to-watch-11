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
import {selectAuthorizationStatus, selectFilmsLoading} from '../../store/selector';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import { HelmetProvider } from 'react-helmet-async';
import Loading from '../loading';

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
