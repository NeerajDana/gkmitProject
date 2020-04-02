import React from 'react'

export const Pagging = ({ setcurrentPage, currentPage, totalPages }) => {
    let PagesArray = [...Array(totalPages).keys()];
  
    return (
      <div className="my-3 p-3">
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-start">
            {PagesArray.map((a, i) => {
              return (
                <li class="page-item">
                  <a
                    onClick={() => setcurrentPage(i)}
                    class="page-link  text-dark"
                    href="#"
                  >
                    {i + 1}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    );
  };
  
