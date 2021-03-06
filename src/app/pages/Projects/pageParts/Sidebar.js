import React, { useContext } from "react";
import { Form, Field } from "react-final-form";
import { ProjectsContext } from "../../../../context";

function Sidebar() {
  const { addProject } = useContext(ProjectsContext);
  return (
    <Form
      onSubmit={addProject}
      render={({ handleSubmit, pristine, invalid }) => (
        <form onSubmit={handleSubmit} className="Sidebar">
          <div className="Sidebar--group">
            <label className="Sidebar--group-item">Project name</label>
            <Field
              required
              name="newProjectName"
              component="input"
              type="text"
              className="Sidebar--group-item data-input"
            />
          </div>
          <div className="Sidebar--group">
            <label className="Sidebar--group-item data-input">Order date</label>
            <Field
              name="newOrderDate"
              component="input"
              type="date"
              className="Sidebar--group-item data-input"
            />
          </div>
          <div className="Sidebar--group">
            <label className="Sidebar--group-item">Expiration date</label>
            <Field
              name="newExpirDate"
              component="input"
              type="date"
              className="Sidebar--group-item data-input"
            />
          </div>
          <div className="Sidebar--group">
            <label className="Sidebar--group-item">Comment</label>
            <Field
              required
              name="newComment"
              component="textarea"
              className="Sidebar--group-item data-input"
              rows="8"
            />
          </div>
          <button
            type="submit"
            disabled={pristine || invalid}
            className="CreateButton"
          >
            Create
          </button>
        </form>
      )}
    />
  );
}

export default Sidebar;
