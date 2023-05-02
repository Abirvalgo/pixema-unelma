import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import {
  SingleCardType,
  CardListType,
  ScrollListType,
  CardType,
} from "../../utils/@globalTypes";
import { GetAllPostsPayload } from "./@types";

type initialStateType = {
  singlePost: SingleCardType | null;
  allPosts: CardListType;
  trendPosts: CardListType;
  relatedPosts: CardListType;
  searchedPosts: CardListType;
  favoritePosts: CardListType | [];
  searchValue: string;
  isLoading: boolean;
  postsCount: number;
  savedPosts: CardListType;
  filtersVisible: boolean;
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
  filtersVisible: false,
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
      allPosts && state.allPosts.push(...allPosts);
    },
    resetPosts: (
      state,
      action: PayloadAction<{ allPosts: []; trendPosts: []; searchedPosts: [] }>
    ) => {
      state.allPosts = action.payload.allPosts;
      state.trendPosts = action.payload.trendPosts;
      state.searchedPosts = action.payload.searchedPosts;
    },
    getTrendPosts: (_, __: PayloadAction<GetAllPostsPayload>) => {},
    setTrendPosts: (state, action: PayloadAction<ScrollListType>) => {
      const { trendPosts, postsCount } = action.payload;
      state.postsCount = postsCount;
      trendPosts && state.trendPosts.push(...trendPosts);
    },
    getFavoritePosts: (_, __: PayloadAction<number>) => {},
    setFavoritePosts: (state, action: PayloadAction<CardListType>) => {
      state.favoritePosts = action.payload;
    },
    addFavoritePosts: (state, action: PayloadAction<any>) => {
      state.favoritePosts = action.payload;
    },
    removeFavoritePosts: (state, action: PayloadAction<any>) => {
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
    setSearchedPosts: (state, action: PayloadAction<CardListType>) => {
      state.searchedPosts = action.payload.filter(
        (item: CardType) => item.type === "movie" || item.type === "title"
      );
    },
    setFiltersVisible: (state, action: PayloadAction<boolean>) => {
      state.filtersVisible = action.payload;
    },
  },
});

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
  resetPosts,
  removeFavoritePosts,
  setFiltersVisible,
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
  getFiltersVisible: (state: RootState) => state.post.filtersVisible,
};
