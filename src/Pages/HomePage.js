import React, { useEffect, useState } from "react";
import FilterBox from "../Components/HomePage/FilterBox";
import Cases from "../Components/HomePage/Cases";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { CASES_FETCH } from "../State/Actions/cases.actions";
import ErrorComponent from "../Components/Shared/ErrorComponent";
import NoDataFound from "../Components/Shared/NoDataFound";

export default function HomePage() {

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch({ type: CASES_FETCH });
    return () => {};
  }, []);



  return (
    <div className="row mt-4 p-3">
      <div className="col-11 mx-auto">
        <FilterBox></FilterBox>
        <Cases></Cases>
       
      </div>
    </div>
  );
}
