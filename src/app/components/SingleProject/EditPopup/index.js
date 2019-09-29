import React, { useContext } from "react";
import Popup from "reactjs-popup";
import "./index.scss";
import { ProjectsContext } from "../../../../context";

function EditPopup({ id }) {
  const { projects, editProject } = useContext(ProjectsContext);
  const { projectName, orderDate, expirDate, comment, status } = projects.find(
    project => project.id === id
  );
  console.log(projectName);

  return (
    <div className="modal">
      <div className="header"> Modal Title </div>
      <div className="content">
        {projectName}
        <br />
        {orderDate}
        <br />
        {expirDate}
        <br></br>
        {comment}
        <br></br>
        {status}
      </div>
      <div className="actions">
        <Popup
          trigger={<button className="button"> Trigger </button>}
          position="top center"
          closeOnDocumentClick
        >
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
            magni omnis delectus nemo, maxime molestiae dolorem numquam
            mollitia, voluptate ea, accusamus excepturi deleniti ratione
            sapiente! Laudantium, aperiam doloribus. Odit, aut.
          </span>
        </Popup>
        <button className="button" onClick={() => editProject()}>
          close modal
        </button>
      </div>
    </div>
  );
}

export default EditPopup;
