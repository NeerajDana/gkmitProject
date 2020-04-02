import { takeEvery } from "redux-saga/effects";
import { CASES_FETCH } from "../Actions/cases.actions";
import { FetchcasesInformation } from "./cases.saga";
export function* watchAuth() {
    
    yield takeEvery(CASES_FETCH, FetchcasesInformation);
   
}
