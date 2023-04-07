import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type initialStateType = {
  singlePost: any;
};

const initialState: initialStateType = {
  singlePost: "",
};
const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    getSinglePost: (_, __: PayloadAction<any>) => {},
    setSinglePost: (state, action: PayloadAction<any>) => {
      state.singlePost = action.payload;
    },
  },
});

export const { getSinglePost, setSinglePost } = postSlice.actions;
export default postSlice.reducer;
export const postSelectors = {
  getSinglePost: (state: RootState) => state.post.singlePost,
};
