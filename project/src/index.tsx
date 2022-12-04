import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {store} from './store';
import {fetchFilmsAction} from './store/api-actions';

const FilmData = {
  TITLE: 'The Grand Budapest Hotel',
  GENRE: 'Drama',
  RELEASE_DATE: 2014
};
store.dispatch(fetchFilmsAction);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App title = {FilmData.TITLE} genre={FilmData.GENRE} releaseData={FilmData.RELEASE_DATE} />
    </Provider>
  </React.StrictMode>,
);
