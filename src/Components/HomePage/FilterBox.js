import React from "react";
import { useSelector, useDispatch } from "react-redux";
import casesReducers from "../../State/Reducers/cases.reducers";
import { UPDATE_FILTER, CASES_FETCH, UPDATE_PAGE_SIZE } from "../../State/Actions/cases.actions";
import moment from "moment";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
export default function FilterBox() {
  const { filters, loading ,pageSize} = useSelector(state => state.casesState);
  const dispatch = useDispatch();
  const UpdateCases = () => {
    dispatch({
      type: CASES_FETCH
    });
  };

  const updateDateChange = (name, date) => {
    console.log(moment(date).format("X"));

    dispatch({
      type: UPDATE_FILTER,
      payload: { ...filters, [name]: moment(date).format("X") }
    });
  };
  const UpdateFilters = e => {
    dispatch({
      type: UPDATE_FILTER,
      payload: { ...filters, [e.target.name]: e.target.value }
    });
  };

  const UpdatePageSize = (val)=>{
    dispatch({
      type: UPDATE_PAGE_SIZE,
      payload: val
    });
  }
  return (
    <div class="form-row">
      <div class="col-4">
        <div class="form-group">
          <label for="exampleInputEmail1">Search By Title</label>
          <input
            type="text"
            name="query"
            value={filters.query}
            onChange={UpdateFilters}
            class="form-control"
            placeholder="search by title"
          />
        </div>
      </div>
    
      <div class="col-3">
        <div class="form-group">
          <label for="exampleInputEmail1">Start Date</label>
          <DatePicker
            id="example-datepicker"
            className="form-control"
            value={moment.unix(filters.occurred_after).toDate()}
            selected={moment.unix(filters.occurred_after).toDate()}
            onChange={val => {
              updateDateChange("occurred_after", val);
            }}
          />
        </div>
      </div>
      <div class="col-3">
        <div class="form-group">
          <label for="exampleInputEmail1">End Date</label>
          <DatePicker
            id="example-datepicker"
            className="form-control"
            value={moment.unix(filters.occurred_before).toDate()}
            selected={moment.unix(filters.occurred_before).toDate()}
            onChange={val => {
              console.log(moment.unix(filters.occurred_before).toDate());
              
              updateDateChange("occurred_before", val);
            }}
          />
        </div>
      </div>
      <div className="col-2">
        <div class="form-group">
          <label for="exampleFormControlSelect1">Cases Per Page</label>
          <select 
          name='pageSize'
          onChange={(e)=>{
            UpdatePageSize(e.target.value)
            
          }}
          value={pageSize}
          class="form-control" id="exampleFormControlSelect1">
            <option>5</option>
            <option>10</option>
            <option>25</option>
            <option>50</option>
            <option>100</option>
          </select>
        </div>
      </div>
      <div class="col-4">
        <div class="form-group text-left">
          <button
            onClick={UpdateCases}
            class="btn btn-outline-dark"
            type="button"
            disabled={loading}
          >
            {loading && (
              <span
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
            )}
            {loading ? ` Loading...` : " Find Cases"}
          </button>
        </div>
      </div>
    </div>
  );
}
