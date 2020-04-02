import React, { useState, useEffect } from "react";
import Case from "./Case";
import { useSelector } from "react-redux";
import ErrorComponent from "../Shared/ErrorComponent";
import NoDataFound from "../Shared/NoDataFound";
import { Pagging } from "../Shared/Pagging";
import { chunk } from "lodash";

export default function Cases() {
  const { cases, error, pageSize } = useSelector(state => state.casesState);
  const [currentPage, setcurrentPage] = useState(0);
  const [casesChunks, setCasesChunks] = useState();

  useEffect(() => {
    if (cases && cases.length) {
      const casesLists = chunk(cases, pageSize);
      setCasesChunks(casesLists);
    }else{
      setCasesChunks(undefined)
    }
    return () => {};
  }, [cases, pageSize]);

  if (error) {
    console.log("return from here");

    return <ErrorComponent error={error}></ErrorComponent>;
  }

  if (cases && cases.length == 0) return <NoDataFound></NoDataFound>;

  return (
    <>
      <div className="my-3 p-3">
        {casesChunks && (
          <>
            {casesChunks[currentPage].map(item => {
              return <Case key={item.id} item={item}></Case>;
            })}
            {casesChunks && casesChunks.length > 1 && (
              <Pagging
                setcurrentPage={setcurrentPage}
                totalPages={casesChunks.length}
                currentPage={currentPage}
              ></Pagging>
            )}
          </>
        )}
      </div>
    </>
  );
}
