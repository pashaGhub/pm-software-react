import React, { useState } from "react";

const DEFAULT_PROJECTS_CONTEXT = {
  projects: [
    {
      projectName: String,
      orderDate: Date,
      expirDate: Date,
      comment: String,
      id: String,
      status: String
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
      id: newId,
      status: "new"
    };
    //there could be 4 types of status: new, started, completed, deleted;

    setProjects([...projects, newProject]);
  };

  const changeStatus = ({ id, newStatus }) => {
    console.log(newStatus);
    const updatedProject = projects.map(project =>
      project.id === id ? { ...project, status: newStatus } : { ...project }
    );

    setProjects(updatedProject);
  };

  const removeProject = id => {
    const removeProject = projects.filter(project => project.id !== id);

    console.log(removeProject);
    setProjects(removeProject);
  };

  return (
    <ProjectsContext.Provider
      value={{
        projects,
        addProject,
        changeStatus,
        removeProject
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
}

export default ProjectsContext;
export { ProjectsProvider };
