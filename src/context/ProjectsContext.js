import React, { useState } from "react";

const DEFAULT_PROJECTS_CONTEXT = {
  projects: [
    {
      projectName: String,
      orderDate: Date,
      expirDate: Date,
      comment: String,
      id: String
    }
  ],
  deleted: []
};

const ProjectsContext = React.createContext();

function ProjectsProvider({ children }) {
  const [projects, setProjects] = useState([]);
  const [deleted, setDeleted] = useState([]);

  const addProject = ({
    newProjectName,
    newOrderDate,
    newExpirDate,
    newComment
  }) => {
    const newId = Date.now() + newProjectName.split(" ").join("");

    const newProject = {
      projectName: newProjectName,
      orderDate: newOrderDate,
      expirDate: newExpirDate,
      comment: newComment,
      id: newId
    };

    setProjects([...projects, newProject]);
  };

  return (
    <ProjectsContext.Provider
      value={{
        projects,
        addProject
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
}

export default ProjectsContext;
export { ProjectsProvider };
