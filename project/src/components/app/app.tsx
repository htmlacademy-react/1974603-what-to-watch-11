import MainPage from '../../pages/main-page';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import NotFoundPage from '../../pages/not-found-page';
import {AppRoute, AuthorizationStatus} from '../../const';
import SignInPage from '../../pages/sign-in-page';
import MyListPage from '../../pages/my-list-page';
import FilmPage from '../../pages/film-page';
import AddReviewPage from '../../pages/add-review-page';
import PlayerPage from '../../pages/player-page';
import PrivateRoute from '../../components/private-route';
import {Film} from '../../types/film-type';

type Props={
  title: string;
  genre: string;
  releaseData: number;
  films: Film[];
}

function App({title, genre, releaseData, films} : Props): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage title={title} genre={genre} releaseData={releaseData} films={films} />}
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignInPage />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <MyListPage films={films} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film}
          element={<FilmPage film ={films[0]} films = {films} />}
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
    </BrowserRouter>
  );
}
export default App;
