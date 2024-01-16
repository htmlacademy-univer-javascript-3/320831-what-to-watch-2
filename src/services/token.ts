import { Token } from '../types/token.ts';

const AUTH_TOKEN = 'auth_token';

export const getToken = (): Token => {
  const token = localStorage.getItem(AUTH_TOKEN);
  return token ?? '';
};

export const saveToken = (token: Token): void => {
  localStorage.setItem(AUTH_TOKEN, token);
};

export const dropToken = (): void => {
  localStorage.removeItem(AUTH_TOKEN);
};
