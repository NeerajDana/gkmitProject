import React from "react";

export default function ErrorComponent({ error }) {
  return (
    <div class="col-7">
    <div class="form-group text-right">
      <p className="text-danger">{error}</p>
    </div>
  </div>
  );
}
