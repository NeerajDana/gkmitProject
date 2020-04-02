import React from "react";

import moment from "moment";
export default function Case({ item }) {
  const { title, description, occurred_at, updated_at, media, address } = item;
  return (
    <div className="my-1 p-1">
      <div class="card case-card">
        <div className="row align-items-center">
          <div className="col-lg-3 col-md-4 col-sm-12">
            <img
              className="img-fluid rounded p-2 w-100"
              style={{ objectFit: "cover" }}
              src={
                media.image_url
                  ? media.image_url
                  : "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
              }
            />
          </div>
          <div className="col-lg-9 col-md-4 col-sm-12">
            <div className="card-body pl-0 ">
              <span class="title">{title}</span>
              <br />
              <span class="description">
                {description ? description : title}
              </span>
              <br />
              <span className="date">
                Occurance : {moment.unix(occurred_at).format("LLL")} - {address}
              </span>
              <br />
              <span className="date">
                Reported : {moment.unix(updated_at).format("LLL")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
