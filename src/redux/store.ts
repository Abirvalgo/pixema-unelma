import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";
import postReducer from "./reducers/postSlice";
import authReducer from "./reducers/authSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    // theme: themeReducer,
    auth: authReducer,
    post: postReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export default store;
