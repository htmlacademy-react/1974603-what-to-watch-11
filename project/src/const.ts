export enum AppRoute {
  SignIn = '/login',
  Main = '/',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = 'films/:id/review',
  Player = 'player/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Films = '/films',
  Film = '/films',
  Similar = '/films/:id/similar',
  Promo = '/promo',
  Favorite = '/favorite',
  StatusInWatch = '/favorite/:id/:status',
  Comments = '/comments/:id',
  Login = '/login',
  Logout = '/logout',
}

export const ONE_PART_OF_THE_FILMS = 8;
export const TIMEOUT_SHOW_ERROR = 4000;
