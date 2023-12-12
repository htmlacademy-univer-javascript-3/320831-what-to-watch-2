import Catalog from '../data/enums/catalog';

const dictionatyGenre = {
  [Catalog.Comedies]: ['Comedy'],
  [Catalog.Crime]: ['Crime'],
  [Catalog.Documentary]: ['Documentary'],
  [Catalog.Dramas]: ['Drama'],
  [Catalog.Horror]: ['Horror'],
  [Catalog.KidsFamily]: ['Action', 'Adventure'],
  [Catalog.Romance]: ['Romance'],
  [Catalog.SciFi]: ['Fantasy'],
  [Catalog.Thrillers]: ['Thriller']
} as {[index: string] : string[]};

export default dictionatyGenre;
