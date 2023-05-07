import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { themeBoolean } from "../../utils/constants";

const initialState = {
  themeValue: !themeBoolean,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<boolean>) => {
      state.themeValue = action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;

export const ThemeSelectors = {
  getThemeValue: (state: RootState) => state.theme.themeValue,
};
