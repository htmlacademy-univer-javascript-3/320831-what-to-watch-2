import { authSlice, IAuthState, initialState } from './auth-slices.ts';
import { getAuthorizationStatus, login, logout } from '../api-actions.ts';
describe('auth-reducer', () => {
  let state: IAuthState;

  beforeEach(() => {
    state = initialState;
  });

  const mockUser = {
    apiData: {
      email:'tomilin229@gmail.com',
      token:'dG9taWxpbjIyOUBnbWFpbC5jb20=',
      name:'tomilin229',
      avatarUrl:'https://13.design.htmlacademy.pro/static/avatar/3.jpg' ,
    },
    apiStatus: null,
    apiError: null,
  };

  it('without additional parameters', () => {
    expect(authSlice.reducer(void 0, { type: 'UNKNOWN_ACTION' }))
      .toEqual({
        'authorizationStatus': {
          'apiData': null,
          'apiError': null,
          'apiStatus': null,
        },
        'user': {
          'apiData': null,
          'apiError': null,
          'apiStatus': null,
        },
      });
  });

  describe('login test', () => {
    it('should set authorizationStatus AUTHORIZED on fulfilled', () => {
      expect(authSlice.reducer(state, { type: login.fulfilled.type, payload: mockUser }).authorizationStatus)
        .toEqual({
          'apiData': true,
          'apiError': null,
          'apiStatus': 'LOAD',
        });
    });
    it('should set user on fulfilled', () => {
      expect(authSlice.reducer(state, { type: login.fulfilled.type, payload: mockUser }).user)
        .toEqual({
          'apiData': {
            'apiData': {
              'avatarUrl': 'https://13.design.htmlacademy.pro/static/avatar/3.jpg',
              'email': 'tomilin229@gmail.com',
              'name': 'tomilin229',
              'token': 'dG9taWxpbjIyOUBnbWFpbC5jb20=',
            },
            'apiError': null,
            'apiStatus': null,
          },
          'apiError': null,
          'apiStatus': null,
        });
    });
  });

  describe('logout test', () => {
    it('should set user null on fulfilled', () => {
      expect(authSlice.reducer(state, { type: logout.fulfilled.type }).user)
        .toEqual({
          'apiData': null,
          'apiError': null,
          'apiStatus': null,
        });
    });
    it('should set authorizationStatus NOT_AUTHORIZED on fulfilled', () => {
      expect(authSlice.reducer(state, { type: logout.fulfilled.type }).authorizationStatus)
        .toEqual({
          apiData: null,
          apiStatus: null,
          apiError: null,
        });
    });
  });

  describe('checkAuth test', () => {
    it('should set user on fulfilled', () => {
      expect(authSlice.reducer(state, { type: getAuthorizationStatus.fulfilled.type, payload: mockUser }).user)
        .toEqual({
          'apiData': {
            'apiData': {
              'avatarUrl': 'https://13.design.htmlacademy.pro/static/avatar/3.jpg',
              'email': 'tomilin229@gmail.com',
              'name': 'tomilin229',
              'token': 'dG9taWxpbjIyOUBnbWFpbC5jb20=',
            },
            'apiError': null,
            'apiStatus': null,
          },
          'apiError': null,
          'apiStatus': null,
        });
    });
    it('should set authorizationStatus AUTHORIZED on fulfilled', () => {
      expect(authSlice.reducer(state, { type: getAuthorizationStatus.fulfilled.type, payload: mockUser }).authorizationStatus)
        .toEqual({
          'apiData': true,
          'apiError': null,
          'apiStatus': 'LOAD',
        });
    });
    it('should set authorizationStatus NOT_AUTHORIZED on rejected', () => {
      expect(authSlice.reducer(state, { type: getAuthorizationStatus.rejected.type, payload: mockUser }).authorizationStatus)
        .toEqual({
          'apiData': null,
          'apiError': true,
          'apiStatus': 'ERROR',
        });
    });
  });
});
