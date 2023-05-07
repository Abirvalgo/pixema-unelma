export type SignUpUserData = {
  email: string;
  password: string;
  password_confirmation: string;
  token_name: string;
};
export type SignInUserData = {
  email: string;
  password: string;
  token_name: string;
};
export type SignUpUserPayload = PayloadWithCallback<SignUpUserData>;
export type SignInUserPayload = PayloadWithCallback<SignInUserData>;
export type PayloadWithCallback<Data> = {
  data: Data;
  callback: () => void;
};
export type GetAllPostsPayload = {
  perPage: number;
  page: number;
  genre?: string | undefined;
  order: string;
  user_score?: string | undefined;
  runtime?: string | undefined;
  release_date?: string | undefined;
  released?: string | undefined;
  language?: string | undefined;
  country?: string | undefined;
};
export type FavoritePostsPayload = {
  id: number | null;
  titleId: number;
};
