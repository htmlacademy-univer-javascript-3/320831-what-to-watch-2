import Catalog from '../../components/catalog';
import FilmCard from '../../components/film-card';
import Footer from '../../components/footer';
import { films } from '../../mocks/films';

const Main: React.FC = () => (
  <>
    <FilmCard film={films[0]} />

    <div className="page-content">
      <Catalog
        isNeededGenres
        filmList={films}
      />
      <Footer />
    </div>
  </>
);

export default Main;
