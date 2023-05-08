export const ACCESS_TOKEN = "pixemaToken";
export const THEME_VALUE = "themeValue";
export const themeBoolean = localStorage.getItem(THEME_VALUE);

export const selectGenres = [
  { value: "drama", label: "Drama" },
  { value: "comedy", label: "Comedy" },
  { value: "horror", label: "Horror" },
  { value: "mystery", label: "Mystery" },
  { value: "thriller", label: "Thriller" },
  { value: "science-fiction", label: "Science-fiction" },
  { value: "romance", label: "Romance" },
];
export const selectLanguages = [
  { value: "en", label: "English" },
  { value: "fr", label: "French" },
  { value: "de", label: "German" },
  { value: "es", label: "Spanish" },
  { value: "sv", label: "Swedish" },
  { value: "ru", label: "Russian" },
  { value: "uk", label: "Ukrainian" },
  { value: "pl", label: "Polish" },
  { value: "ko", label: "Korean" },
  { value: "ja", label: "Japanese" },
  { value: "it", label: "Italian" },
];

//react select styles
export const customSelectStyles = {
  menuList: (styles: any) => ({
    ...styles,
    backgroundColor: "#323537",
    "& >div:hover": {
      backgroundColor: "#323537",
    },
    "& >div": {
      backgroundColor: "#323537",
    },
  }),
  multiValue: (styles: any) => ({
    ...styles,
    backgroundColor: "#242426",
    borderRadius: 6,
    "&>div": {
      color: "#FFF",
    },
  }),
  multiValueRemove: (styles: any) => ({
    ...styles,
    backgroundColor: "#242426",
    borderRadius: 6,
    "&:hover": {
      backgroundColor: "#242426",
    },
  }),
  singleValue: (styles: any) => ({
    ...styles,
    color: "#fff",
  }),
  indicatorsContainer: (styles: any) => ({
    ...styles,
    color: "#fff",
    "& :hover": {
      backgroundColor: "#323537",
    },
    "& div:hover": {
      color: "#fff",
      stroke: "#fff",
    },
    "& svg:hover": {
      fill: "#fff",
      stroke: "#fff",
    },
    "&>svg:active": {
      fill: "#fff",
      stroke: "#fff",
    },
    "& svg:focus": {
      fill: "#fff",
      stroke: "#fff",
    },
  }),

  clearIndicator: (styles: any) => ({
    ...styles,
    // "& :hover": {
    //   backgroundColor: "#323537",
    // },
    "& svg:hover": {
      fill: "#fff",
      stroke: "#fff",
      path: "#fff",
    },
    "& svg:active": {
      fill: "#fff",
      stroke: "#fff",
      path: "#fff",
    },
    "& svg:focus": {
      fill: "#fff",
      stroke: "#fff",
      path: "#fff",
    },
  }),
  indicatorSeparator: (styles: any) => ({
    ...styles,
    backgroundColor: "#323537",
  }),
  valueContainer: (styles: any) => ({
    ...styles,
    minHeight: 65,
    "&  input": {
      height: 24,
    },
  }),

  control: (styles: any, state: any) => ({
    ...styles,
    color: "#FFF",
    placeholderColor: "#FFF",
    boxShadow: "#323537",
    "&:hover": {
      borderColor: "#000",
    },
    "&:focus": {
      outline: `2 solid #7B61FF`,
    },
    "&:active": {
      outline: `2 solid #7B61FF`,
    },
    backgroundColor: "#323537",
    borderRadius: 10,
    border: "0",
    outline: "0",
  }),
  option: (styles: any, {}) => {
    return {
      ...styles,
      margin: 0,
      color: "#FFF",
      cursor: "default",
      "&:hover": {
        color: "#7B61FF",
      },
    };
  },
};
