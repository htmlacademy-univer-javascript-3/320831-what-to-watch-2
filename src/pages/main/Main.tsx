import Catalog from '../../componants/catalog';
import FilmCard from '../../componants/film-card';
import Footer from '../../componants/footer';
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
