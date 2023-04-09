import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type initialStateType = {
  singlePost: any;
  allPosts: any;
  isLoading: boolean;
};

const initialState: initialStateType = {
  singlePost: "",
  allPosts: "",
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
  setLoading,
} = postSlice.actions;
export default postSlice.reducer;
export const postSelectors = {
  getSinglePost: (state: RootState) => state.post.singlePost,
  getAllPosts: (state: RootState) => state.post.allPosts,
  getIsLoading: (state: RootState) => state.post.isLoading,
};
