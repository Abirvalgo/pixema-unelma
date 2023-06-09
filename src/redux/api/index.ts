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

const createList = () => {
  return API.post(
    `/lists`,
    {
      details: {
        name: "favorites",
        description: "favorites",
        public: false,
      },
      items: [],
    },
    {
      headers: {
        Accept: `application/json`,
        Authorization: `Bearer ${localStorage.getItem("pixemaToken")}`,
      },
    }
  );
};
const getFavoritesId = () => {
  return API.get(
    "/user-profile/me/lists",
    {},
    {
      headers: {
        Accept: `application/json`,
        Authorization: `Bearer ${localStorage.getItem("pixemaToken")}`,
      },
    }
  );
};
const getFavoritePosts = (id: number) => {
  return API.get(
    `/lists/${id}`,
    {},
    {
      headers: {
        Accept: `application/json`,
        Authorization: `Bearer ${localStorage.getItem("pixemaToken")}`,
      },
    }
  );
};

const addFavoritePosts = (id: number, titleId: number) => {
  return API.post(
    `/lists/${id}/add`,
    {
      itemId: titleId,
      itemType: "title",
    },
    {
      headers: {
        Accept: `application/json`,
        Authorization: `Bearer ${localStorage.getItem("pixemaToken")}`,
      },
    }
  );
};
const removeFavoritePosts = (id: number, titleId: number) => {
  return API.post(
    `/lists/${id}/remove`,
    {
      itemId: titleId,
      itemType: "title",
    },
    {
      headers: {
        Accept: `application/json`,
        Authorization: `Bearer ${localStorage.getItem("pixemaToken")}`,
      },
    }
  );
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
  perPage: number,
  page: number,
  genre?: string,
  order?: string,
  user_score?: string,
  runtime?: string,
  release_date?: string,
  released?: string,
  language?: string,
  country?: string
) => {
  return API.get(
    `/titles`,
    {
      perPage,
      page,
      genre,
      order,
      user_score,
      runtime,
      released,
      language,
      country,
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
  page: number,
  order?: string,
  release_date?: string,
  released?: string,
  country?: string,
  score?: string
) => {
  return API.get(
    `/titles`,
    {
      perPage,
      page,
      order,
      released: `2018,2023`,
      country: `us`,
      score: "7.9,9.9",
    },
    {
      headers: {
        Accept: `application/json`,
        Authorization: `Bearer ${localStorage.getItem("pixemaToken")}`,
      },
    }
  );
};

//Related posts for single post
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

const getSearchedPosts = (query: string) => {
  return API.get(
    `/search/${query}`,
    {
      limit: 20,
    },
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
  getSearchedPosts,
  createList,
  getFavoritesId,
  getFavoritePosts,
  addFavoritePosts,
  removeFavoritePosts,
};
