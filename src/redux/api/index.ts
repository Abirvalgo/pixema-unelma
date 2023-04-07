import { create } from "apisauce";

const API = create({
  baseURL: "https://unelmamovie.com/api/v1",
});
// offset: number, search?: string, ordering?: string
const getPosts = () => {
  return API.get(
    "/blog/posts/",
    {},
    {
      headers: {
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
  getPosts,
  getSinglePost,
};
