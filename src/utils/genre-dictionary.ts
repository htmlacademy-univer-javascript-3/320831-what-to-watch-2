import Catalog from '../data/enums/catalog';

const genreDictionaty: Record<Catalog, string[]> = {
  [Catalog.All]: ['Comedy', 'Crime', 'Documentary', 'Drama', 'Horror', 'Action', 'Adventure', 'Romance', 'Fantasy', 'Thriller'],
  [Catalog.Comedies]: ['Comedy'],
  [Catalog.Crime]: ['Crime'],
  [Catalog.Documentary]: ['Documentary'],
  [Catalog.Dramas]: ['Drama'],
  [Catalog.Horror]: ['Horror'],
  [Catalog.KidsFamily]: ['Action', 'Adventure'],
  [Catalog.Romance]: ['Romance'],
  [Catalog.SciFi]: ['Fantasy'],
  [Catalog.Thrillers]: ['Thriller']
};

export default genreDictionaty;
