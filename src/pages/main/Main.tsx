import FilmCatalog from '../../components/catalog';
import FilmCard from '../../components/film-card';
import Footer from '../../components/footer';
import { films } from '../../mocks/films';

const Main: React.FC = () => (
  <>
    <FilmCard film={films[0]} />

    <div className="page-content">
      <FilmCatalog />
      <Footer />
    </div>
  </>
);

export default Main;
