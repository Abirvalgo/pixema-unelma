import { create } from "apisauce";

const API = create({
  baseURL: "https://unelmamovie.com/api/v1",
});

const getAllPosts = (
  perPage: number,
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
        Authorization: `Bearer 550|FkMZF07j8VDcFwVGtBlKazWe8qVGM8GFrM3CPuFe`,
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
        Authorization: `Bearer 550|FkMZF07j8VDcFwVGtBlKazWe8qVGM8GFrM3CPuFe`,
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
        Authorization: `Bearer 550|FkMZF07j8VDcFwVGtBlKazWe8qVGM8GFrM3CPuFe`,
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
        Authorization: `Bearer 550|FkMZF07j8VDcFwVGtBlKazWe8qVGM8GFrM3CPuFe`,
      },
    }
  );
};

export default {
  getAllPosts,
  getSinglePost,
  getTrendPosts,
  getRelatedPosts,
};
