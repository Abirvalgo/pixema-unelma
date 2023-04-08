import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type initialStateType = {
  singlePost: any;
  allPosts: any;
};

const initialState: initialStateType = {
  singlePost: "",
  allPosts: "",
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
  },
});

export const { getSinglePost, setSinglePost, getAllPosts, setAllPosts } =
  postSlice.actions;
export default postSlice.reducer;
export const postSelectors = {
  getSinglePost: (state: RootState) => state.post.singlePost,
  getAllPosts: (state: RootState) => state.post.allPosts,
};
