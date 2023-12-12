import FilmCatalog from '../../components/catalog';
import FilmCard from '../../components/film-card';
import Footer from '../../components/footer';

const Main: React.FC = () => (
  <>
    <FilmCard />

    <div className="page-content">
      <FilmCatalog />
      <Footer />
    </div>
  </>
);

export default Main;
