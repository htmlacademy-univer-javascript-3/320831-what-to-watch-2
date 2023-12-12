export const getFilms = () => '/films';

export const getFilm = (id: string) => `/films/${id}`;

export const checkAuth = () => '/login';

export const login = () => '/login';

export const logout = () => '/logout';

export const getPromo = () => '/promo';

export const getSimilarFilms = (id: string) => `/films/${id}/similar`;

export const getReviewsFilm = (id: string) => `/comments/${id}`;

