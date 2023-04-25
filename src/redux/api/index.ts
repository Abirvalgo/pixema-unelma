import { create } from "apisauce";
import { SignInUserData, SignUpUserData } from "../reducers/@types";

const API = create({
  baseURL: "https://unelmamovie.com/api/v1",
});

const signUpUser = (data: SignUpUserData) => {
  return API.post(`/auth/register`, data, {
    headers: {
      Accept: `application/json`,
    },
  });
};
const signInUser = (data: SignInUserData) => {
  return API.post(`/auth/login`, data, {
    headers: {
      Accept: `application/json`,
    },
  });
};
const getUserInfo = () => {
  return API.get(
    "/user-profile/me",
    {},
    {
      headers: {
        Accept: `application/json`,
        Authorization: `Bearer ${localStorage.getItem("pixemaToken")}`,
      },
    }
  );
};
const getAllPosts = (
  perPage?: number,
  page?: number,
  release_date?: string,
  released?: string,
  country?: string
) => {
  return API.get(
    `/titles`,
    {
      perPage: 10,
      page: 1,
      order: `popularity:desc`,
      released: `2022,2023`,
      country: `us`,
    },
    {
      headers: {
        Accept: `application/json`,
        Authorization: `Bearer ${localStorage.getItem("pixemaToken")}`,
      },
    }
  );
};

const getTrendPosts = (
  perPage: number,
  page?: number,
  release_date?: string,
  released?: string,
  country?: string,
  score?: string
) => {
  return API.get(
    `/titles`,
    {
      perPage: 10,
      page: 1,
      order: `popularity:desc`,
      released: `2018,2023`,
      country: `us`,
      score: "8,9.9",
    },
    {
      headers: {
        Accept: `application/json`,
        Authorization: `Bearer ${localStorage.getItem("pixemaToken")}`,
      },
    }
  );
};

const getRelatedPosts = (id: string) => {
  return API.get(
    `/titles/${id}/related`,
    {},
    {
      headers: {
        Accept: `application/json`,
        Authorization: `Bearer ${localStorage.getItem("pixemaToken")}`,
      },
    }
  );
};
const getSinglePost = (id: string) => {
  return API.get(
    `/titles/${id}`,
    {},
    {
      headers: {
        Accept: `application/json`,
        Authorization: `Bearer ${localStorage.getItem("pixemaToken")}`,
      },
    }
  );
};

export default {
  getAllPosts,
  getSinglePost,
  getTrendPosts,
  getRelatedPosts,
  signUpUser,
  signInUser,
  getUserInfo,
};
