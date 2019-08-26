import React, { useContext } from "react";
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

  function ActionButtons() {
    switch (status) {
      case "new":
        return (
          <React.Fragment>
            <button
              className="ActionBtn StartBtn"
              onClick={() => changeStatus({ id, newStatus: "started" })}
            >
              Start
            </button>
            <button
              className="ActionBtn DeleteBtn"
              onClick={() => changeStatus({ id, newStatus: "deleted" })}
            >
              Delete
            </button>
          </React.Fragment>
        );
      case "started":
        return (
          <React.Fragment>
            <button
              className="ActionBtn CompleteBtn"
              onClick={() => changeStatus({ id, newStatus: "completed" })}
            >
              Complete
            </button>
            <button
              className="ActionBtn DeleteBtn"
              onClick={() => changeStatus({ id, newStatus: "deleted" })}
            >
              Delete
            </button>
          </React.Fragment>
        );
      case "completed":
        return (
          <React.Fragment>
            <button
              className="ActionBtn DeleteBtn"
              onClick={() => changeStatus({ id, newStatus: "deleted" })}
            >
              Delete
            </button>
          </React.Fragment>
        );
      case "deleted":
        return (
          <React.Fragment>
            <button
              className="ActionBtn RemoveBtn"
              onClick={() => removeProject(id)}
            >
              Remove
            </button>
          </React.Fragment>
        );
      default:
        break;
    }
  }

  function ShadowColor({ children }) {
    let currentTime = new Date();
    let projectTime = new Date(expirDate);
    let timeLeft = (projectTime - currentTime) / 1000 / 60 / 60 / 24;

    if (status === "deleted") {
      return <div className="SingleProject shadow-deleted">{children}</div>;
    } else if (status === "completed") {
      return <div className="SingleProject shadow-completed">{children}</div>;
    } else if (timeLeft < 7) {
      return <div className="SingleProject shadow-danger">{children}</div>;
    } else if (timeLeft < 14) {
      return <div className="SingleProject shadow-warning">{children}</div>;
    }
    return <div className="SingleProject shadow-primary">{children}</div>;
  }

  return (
    <ShadowColor>
      <div className="SingleProject--item">{projectName}</div>
      <div className="SingleProject--item">{orderDate}</div>
      <div className="SingleProject--item">{expirDate}</div>
      <div className="SingleProject--item">{comment}</div>
      <div className="SingleProject--item">{ActionButtons()}</div>
    </ShadowColor>
  );
}

export default SingleProject;
