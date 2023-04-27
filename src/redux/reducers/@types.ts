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