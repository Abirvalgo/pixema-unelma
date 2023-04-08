import { create } from "apisauce";

const API = create({
  baseURL: "https://unelmamovie.com/api/v1",
});
// offset: number, search?: string, ordering?: string
const getAllPosts = (perPage: number, page?: number) => {
  return API.get(
    "/titles",
    {
      perPage: 10,
      page: 1,
    },
    {
      headers: {
        Accept: `application/json`,
        Authorization: `Bearer 550|FkMZF07j8VDcFwVGtBlKazWe8qVGM8GFrM3CPuFe`,
      },
    }
  );
};
const getSinglePost = (token: string) => {
  return API.get(
    "/titles/1",
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
};
