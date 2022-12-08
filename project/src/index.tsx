import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {store} from './store';
import {checkAuthAction} from './store/api-actions';
import ErrorMessage from './components/error-message/error-message';

const FilmData = {
  TITLE: 'The Grand Budapest Hotel',
  GENRE: 'Drama',
  RELEASE_DATE: 2014
};
store.dispatch(checkAuthAction);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App title = {FilmData.TITLE} genre={FilmData.GENRE} releaseData={FilmData.RELEASE_DATE} />
    </Provider>
  </React.StrictMode>,
);
