import React, { useContext } from "react";
import classes from "classnames";
import "./index.scss";
import { ProjectsContext } from "../../../context";

function SingleProject({
  projectName,
  orderDate,
  expirDate,
  comment,
  id,
  status
}) {
  const { changeStatus, removeProject } = useContext(ProjectsContext);

  const currentTime = new Date();
  const projectTime = new Date(expirDate);
  const timeLeft = (projectTime - currentTime) / 1000 / 60 / 60 / 24;

  const className = classes("SingleProject", {
    "shadow-deleted": status === "deleted",
    "shadow-completed": status === "completed",
    "shadow-danger": timeLeft < 7,
    "shadow-warning": timeLeft < 14 && timeLeft >= 7
  });

  return (
    <div className={className}>
      <div className="SingleProject--item">
        <span>Title:</span>
        {projectName}
      </div>
      <div className="SingleProject--item">
        <span>Order date:</span>
        {orderDate}
      </div>
      <div className="SingleProject--item">
        <span>Expiration date:</span>
        {expirDate}
      </div>
      <div className="SingleProject--item">
        <span>Comment:</span>
        {comment}
      </div>
      <div className="SingleProject--item">
        <button
          className={classes("ActionBtn", "StartBtn", {
            Inactive: status !== "new"
          })}
          onClick={() => changeStatus({ id, newStatus: "started" })}
        >
          Start
        </button>
        <button
          className={classes("ActionBtn", "CompleteBtn", {
            Inactive: status !== "started"
          })}
          onClick={() => changeStatus({ id, newStatus: "completed" })}
        >
          Complete
        </button>
        <button
          className={classes("ActionBtn", "DeleteBtn", {
            Inactive: status === "deleted"
          })}
          onClick={() => changeStatus({ id, newStatus: "deleted" })}
        >
          Delete
        </button>
        <button
          className={classes("ActionBtn", "RemoveBtn", {
            Inactive: status !== "deleted"
          })}
          onClick={() => removeProject(id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default SingleProject;
