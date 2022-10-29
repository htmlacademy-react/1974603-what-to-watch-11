
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const FilmData = {
  TITLE: 'The Grand Budapest Hotel',
  GENRE: 'Drama',
  RELEASE_DATE: 2014
}
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App title = {FilmData.TITLE} genre={FilmData.GENRE} releaseData={FilmData.RELEASE_DATE}/>
  </React.StrictMode>,
);
