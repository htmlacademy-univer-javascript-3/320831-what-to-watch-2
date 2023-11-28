import Catalog from '../../componants/catalog';
import FilmCard from '../../componants/film-card';
import Footer from '../../componants/footer';
import { smallCardList } from '../../data/constants/smallCardList';

const Main: React.FC = () => (
  <>
    <FilmCard
      myListCount={9}
      film={{
        poster: { src: 'img/bg-the-grand-budapest-hotel.jpg', alt: 'The Grand Budapest Hotel' },
        title: 'The Grand Budapest Hotel',
        genre: 'Drama',
        year: 2014
      }}
    />

    <div className="page-content">
      <Catalog isNeededGenres cardList={smallCardList}/>
      <Footer/>
    </div>
  </>
);

export default Main;
