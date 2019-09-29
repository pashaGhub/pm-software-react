import React, { useContext } from "react";
import classes from "classnames";
import ReadMoreReact from "read-more-react";
import Popup from "reactjs-popup";
import "./index.scss";

import EditPopup from "./EditPopup";
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

  // function EditPopup(id) {
  //   const projectToEdit = projects.find(project => project.id === id);

  //   return console.log(projectToEdit);
  // }

  return (
    <div className={className}>
      <div className="SingleProject--title-tag SingleProject--tag">Title:</div>
      <div className="SingleProject--order-tag SingleProject--tag">
        Order date:
      </div>
      <div className="SingleProject--expir-tag SingleProject--tag">
        Expiration date:
      </div>
      <div className="SingleProject--comment-tag SingleProject--tag">
        Comment:
      </div>
      <div className="SingleProject--order-value SingleProject--value">
        {orderDate}
      </div>
      <div className="SingleProject--expir-value SingleProject--value">
        {expirDate}
      </div>
      <div className="SingleProject--title-value SingleProject--value">
        {projectName}
      </div>
      <div className="SingleProject--comment-value SingleProject--value">
        <ReadMoreReact
          text={comment}
          min={80}
          ideal={80}
          max={80}
          readMoreText="(read more...)"
        ></ReadMoreReact>
      </div>
      <div className="SingleProject--comment-value SingleProject--value"></div>

      <div className="SingleProject--btns">
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
        <Popup
          trigger={<button className="ActionBtn RemoveBtn"> Edit </button>}
          modal
          closeOnDocumentClick
        >
          <EditPopup id={id} />
        </Popup>
      </div>
    </div>
  );
}

export default SingleProject;
