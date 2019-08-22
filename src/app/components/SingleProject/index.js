import React from "react";
import "./index.scss";

function SingleProject({ projectName, orderDate, expirDate, comment }) {
  return (
    <div className="SingleProject border-completed">
      <div className="SingleProject--item">{projectName}</div>
      <div className="SingleProject--item">{orderDate}</div>
      <div className="SingleProject--item">{expirDate}</div>
      <div className="SingleProject--item">{comment}</div>
      <div className="SingleProject--item">
        <button className="ActionBtn DeleteBtn">Delete</button>
        <button className="ActionBtn StartBtn">Start</button>
        <button className="ActionBtn CompleteBtn">Complete</button>
        <button className="ActionBtn RemoveBtn">Remove</button>
      </div>
    </div>
  );
}

export default SingleProject;
