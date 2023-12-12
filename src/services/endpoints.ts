export class Endpoints {
  public static getFilms = () => '/films';

  public static getFilm = (id: string) => `/films/${id}`;

  public static checkAuth = () => '/login';

  public static login = () => '/login';

  public static logout = () => '/logout';
}
