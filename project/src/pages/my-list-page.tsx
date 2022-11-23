import {Film} from '../types/film-type';
import FilmsListComponent from '../components/film-list-component';

type Props = {
  films: Film[];
}

function MyListPage({films} : Props): JSX.Element {
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <FilmsListComponent films = {films}/>
    </section>
  );
}

export default MyListPage;
