import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {films} from './mocks/films';
import {Provider} from 'react-redux';
import {store} from './store';

const FilmData = {
  TITLE: 'The Grand Budapest Hotel',
  GENRE: 'Drama',
  RELEASE_DATE: 2014
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App title = {FilmData.TITLE} genre={FilmData.GENRE} releaseData={FilmData.RELEASE_DATE} films = {films}/>
    </Provider>
  </React.StrictMode>,
);
