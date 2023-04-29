import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import {
  SingleCardType,
  CardListType,
  ScrollListType,
} from "../../utils/@globalTypes";
import { GetAllPostsPayload } from "./@types";

type initialStateType = {
  singlePost: SingleCardType | null;
  allPosts: CardListType;
  trendPosts: CardListType;
  relatedPosts: CardListType;
  searchedPosts: CardListType;
  favoritePosts: CardListType;
  searchValue: string;
  isLoading: boolean;
  postsCount: number;
  savedPosts: CardListType;
};

const initialState: initialStateType = {
  singlePost: null,
  allPosts: [],
  trendPosts: [],
  relatedPosts: [],
  searchedPosts: [],
  favoritePosts: [],
  searchValue: "",
  isLoading: false,
  postsCount: 0,
  savedPosts: [],
};
const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    getSinglePost: (_, __: PayloadAction<string>) => {},
    setSinglePost: (state, action: PayloadAction<SingleCardType | null>) => {
      state.singlePost = action.payload;
    },
    getAllPosts: (_, __: PayloadAction<GetAllPostsPayload>) => {},
    setAllPosts: (state, action: PayloadAction<ScrollListType>) => {
      const { allPosts, postsCount } = action.payload;
      state.postsCount = postsCount;
      state.allPosts.push(...allPosts);
    },
    getTrendPosts: (_, __: PayloadAction<any>) => {},
    setTrendPosts: (state, action: PayloadAction<CardListType>) => {
      state.trendPosts = action.payload;
    },
    getFavoritePosts: (_, __: PayloadAction<number>) => {},
    setFavoritePosts: (state, action: PayloadAction<CardListType>) => {
      state.favoritePosts = action.payload;
    },
    addFavoritePosts: (state, action: PayloadAction<any>) => {
      state.favoritePosts = action.payload;
    },
    getRelatedPosts: (_, __: PayloadAction<any>) => {},
    setRelatedPosts: (state, action: PayloadAction<any>) => {
      state.relatedPosts = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    getSearchedPosts: (state, action: PayloadAction<any>) => {
      state.searchValue = action.payload.searchValue;
    },
    setSearchedPosts: (state, action: PayloadAction<any>) => {
      state.searchedPosts = action.payload;
    },
  },
});
// надо добавлять и как-то удалять (делать запрос по id из all posts???) или писать в массив id из singlpost,
//а потом рендерить через allposts как-то?
// попробовать cardlist: cardtype1 | cardtype2 и по разному брать данные для отрисовки. хз!!!!!!!!!!!!!!!!!
//TODO есть в unelmaapi get list, post list (глянуть в переписке с колпаковым)
export const {
  getSinglePost,
  setSinglePost,
  getAllPosts,
  setAllPosts,
  getTrendPosts,
  setTrendPosts,
  getRelatedPosts,
  setRelatedPosts,
  setLoading,
  getSearchedPosts,
  setSearchedPosts,
  getFavoritePosts,
  setFavoritePosts,
  addFavoritePosts,
} = postSlice.actions;
export default postSlice.reducer;
export const PostSelectors = {
  getSinglePost: (state: RootState) => state.post.singlePost,
  getAllPosts: (state: RootState) => state.post.allPosts,
  getTrendPosts: (state: RootState) => state.post.trendPosts,
  getRelatedPosts: (state: RootState) => state.post.relatedPosts,
  getIsLoading: (state: RootState) => state.post.isLoading,
  getSearchedPosts: (state: RootState) => state.post.searchedPosts,
  getPostsCount: (state: RootState) => state.post.postsCount,
  getFavoritePosts: (state: RootState) => state.post.favoritePosts,
};
