import React from "react";

function Filters() {
  return (
    <div className="Projects--list-header">
      <button className="Projects--list-header-filter">Project name</button>
      <button className="Projects--list-header-filter">Order date</button>
      <button className="Projects--list-header-filter">Expiration date</button>
      <button className="Projects--list-header-filter">Comment</button>
      <button className="Projects--list-header-filter">Action</button>
    </div>
  );
}

export default Filters;
