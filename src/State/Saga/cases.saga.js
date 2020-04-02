import { FetchcasesData } from "../Service/cases.service";
import { put, select } from "redux-saga/effects";
import {
  CASES_FETCH_START,
  CASES_FETCH_SUCCESS,
  CASES_FETCH_FAIL
} from "../Actions/cases.actions";
export function* FetchcasesInformation(action) {
  try {
    yield put({ type: CASES_FETCH_START });

    const { filters } = yield select(state => state.casesState);

    const { data } = yield FetchcasesData(filters);


    yield put({ type: CASES_FETCH_SUCCESS, payload: data.incidents });
  } catch (error) {
    yield put({
      type: CASES_FETCH_FAIL,
      payload: error.response ? error.response.data.message : error.message
    });
  }
}
