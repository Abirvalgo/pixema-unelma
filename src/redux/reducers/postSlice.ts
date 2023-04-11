import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type initialStateType = {
  singlePost: any;
  allPosts: any;
  trendPosts: any;
  relatedPosts: any;
  isLoading: boolean;
};

const initialState: initialStateType = {
  singlePost: "",
  allPosts: "",
  trendPosts: "",
  relatedPosts: "",
  isLoading: false,
};
const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    getSinglePost: (_, __: PayloadAction<any>) => {},
    setSinglePost: (state, action: PayloadAction<any>) => {
      state.singlePost = action.payload;
    },
    getAllPosts: (_, __: PayloadAction<any>) => {},
    setAllPosts: (state, action: PayloadAction<any>) => {
      state.allPosts = action.payload;
    },
    getTrendPosts: (_, __: PayloadAction<any>) => {},
    setTrendPosts: (state, action: PayloadAction<any>) => {
      state.trendPosts = action.payload;
    },
    getRelatedPosts: (_, __: PayloadAction<any>) => {},
    setRelatedPosts: (state, action: PayloadAction<any>) => {
      state.relatedPosts = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
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
} = postSlice.actions;
export default postSlice.reducer;
export const postSelectors = {
  getSinglePost: (state: RootState) => state.post.singlePost,
  getAllPosts: (state: RootState) => state.post.allPosts,
  getTrendPosts: (state: RootState) => state.post.trendPosts,
  getRelatedPosts: (state: RootState) => state.post.relatedPosts,
  getIsLoading: (state: RootState) => state.post.isLoading,
};
