import {
  CASES_FETCH,
  CASES_FETCH_START,
  CASES_FETCH_FAIL,
  CASES_FETCH_SUCCESS,
  UPDATE_FILTER,
  UPDATE_PAGE_SIZE
} from "../Actions/cases.actions";
import moment from "moment";
const initialState = {
  cases: null,
  filters: {
    occurred_after: moment()
      .subtract("5", "Y")
      .format("X"),
    occurred_before: moment().format("X"),
    incident_type: "theft",
    proximity: "delhi",
    query: ""
  },
  pageSize: 10,
  loading: false,
  error: null
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CASES_FETCH_SUCCESS:
      return { ...state, cases: payload, error: null, loading: false };
    case CASES_FETCH_START:
      return { ...state, loading: true, error: null, cases: undefined };

    case CASES_FETCH_FAIL:
      return { ...state, error: payload, cases: null, loading: false };

    case UPDATE_FILTER:
      return { ...state, filters: { ...payload } };

    case UPDATE_PAGE_SIZE:
      return { ...state, pageSize: payload  };

    default:
      return { ...state };
  }
};
