
import MainPage from '../../pages/main-page';
type AppProps = {
  title: string;
  genre: string;
  releaseData: number;
}

function App({title, genre, releaseData} : AppProps): JSX.Element {
  return <MainPage title={title} genre = {genre} releaseData = {releaseData}></MainPage>;
}
export default App;
