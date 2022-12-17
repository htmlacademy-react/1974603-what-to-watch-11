import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

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
  FilmStatus = '/favorite',
  Comments = '/comments/:id',
  Login = '/login',
  Logout = '/logout',
}

export const ONE_PART_OF_THE_FILMS = 8;
export const TIMEOUT_SHOW_ERROR = 4000;
export const TYME_DELAY = 1000;
export const MIN_COMMENT_LENGTH = 50;
export const MAX_COMMENT_LENGTH = 400;
export const SECONDS_IN_HOUR = 3600;
export const ratings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export const EMAIL_REGULAR_EXPR = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
export const PASSWORD_REGULAR_EXPR = /[a-z]\d|/i;
export const formatMinutes = (minutes:number) => dayjs.duration(minutes, 'minutes').format('H[h] mm[m]');
export const formatDate = (date: string) => dayjs(date).format('MMMM D, YYYY');
