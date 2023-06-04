import { call, put } from "redux-saga/effects";
import { ApiResponse } from "apisauce";
import { logoutUser } from "../reducers/authSlice";
import { ACCESS_TOKEN } from "../../utils/constants";

function* callCheckingAuth(apiCall: any, ...params: any) {
  const accessToken = localStorage.getItem(ACCESS_TOKEN);
  if (accessToken) {
    const response: ApiResponse<any> = yield call(
      apiCall,
      ...params,
      accessToken
    );
    if (response.status === 401) {
      yield put(logoutUser());
    } else {
      return response;
    }
    return response;
  } else {
    yield put(logoutUser());
  }
}

export default callCheckingAuth;
