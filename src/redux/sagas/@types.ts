import { CardListType, SingleCardType } from "../../utils/@globalTypes";

export type FavoritePostsResponse = {
  list: FavIdDataType;
  items: Pagination;
  status: string;
};

export type AddFavoritePostsResponse = {
  list: List;
  status: string;
};
export type List = {
  id: number;
  name: string;
  description: string;
  userID: number;
  system: boolean;
  public: boolean;
  autoUpdate: null;
  createdAt: string;
  updatedAt: string;
  style: null;
  image: string;
  modelType: string;
  items: CardListType;
};

export type SignUpUserResponse = {
  status: string;
  boostrapData: BoostrapData;
};
export type SignInUserResponse = {
  themes: Themes;
  user: UserLogin;
  menus: any[];
  locales: Locale[];
  status: string;
};

type BoostrapData = {
  themes: Themes;
  user: User;
  menus: any[];
  locales: Locale[];
};
type Locale = {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
  language: string;
};

type Themes = {
  dark: Dark;
  light: Dark;
  selected: string;
};

type Dark = {
  id: number;
  name: string;
  is_dark: boolean;
  default_light: boolean;
  default_dark: boolean;
  user_id: number;
  colors: { [key: string]: number[] };
  created_at: string;
  updated_at: string;
};

export type User = {
  first_name: string | null;
  last_name: string | null;
  language: string;
  country: string | null;
  timezone: string | null;
  email_verified_at: string;
  email: string;
  updated_at: string;
  created_at: string;
  id: number;
  access_token: string;
  display_name: string;
  has_password: boolean;
  model_type: string;
  watchlist: string | null;
};

export type GetUserInfo = {
  user: UserLogin;
  status: string;
};
export type UserLogin = {
  id: number;
  username: null;
  email: string;
  api_token: null;
  activated: number;
  activation_code: null;
  activated_at: null;
  last_login: null;
  persist_code: null;
  reset_password_code: null;
  first_name: null;
  last_name: null;
  gender: null;
  avatar: string;
  created_at: string;
  updated_at: string;
  background: null;
  confirmed: number;
  confirmation_code: null;
  language: string;
  country: null;
  timezone: null;
  stripe_id: null;
  available_space: null;
  card_brand: null;
  card_last_four: null;
  email_verified_at: string;
  access_token: string;
  display_name: string;
  has_password: boolean;
  model_type: string;
};

export type SinglePostResponse = {
  title: SingleCardType;
  status: string;
};
export type AllPostsResponse = {
  pagination: Pagination;
  status: string;
};

export type Pagination = {
  currentPage: number;
  data: CardListType;
  firstPageURL: string;
  from: number;
  lastPage: number;
  lastPageURL: string;
  links: Link[];
  nextPageURL: string;
  path: string;
  perPage: number;
  prevPageURL: null;
  to: number;
  total: number;
};
export type Link = {
  url: null | string;
  label: string;
  active: boolean;
};

export type GetFavoritesIdResponse = {
  pagination: GetFavoritesIdData;
  status: string;
};
export interface GetFavoritesIdData extends Omit<Pagination, "data"> {
  data: FavIdDataType[];
}
export type FavIdDataType = {
  id: number;
  name: string;
  description: null | string;
  userID: number;
  system: boolean;
  public: boolean;
  autoUpdate: null;
  createdAt: string;
  updatedAt: string;
  style: null;
  image: null | string;
  modelType: string;
};
