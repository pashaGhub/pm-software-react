import React, { useState } from "react";

// data structure template: DEFAULT_PROJECTS_CONTEXT = {
//   projects: [
//     {
//       projectName: String,
//       orderDate: Date,
//       expirDate: Date,
//       comment: String,
//       id: String,
//       status: String
//     }
//   ]
// };

const ProjectsContext = React.createContext();

function ProjectsProvider({ children }) {
  const [projects, setProjects] = useState([]);
  const [option, setOption] = useState("active"); //2 options: "active" or "deleted"
  const [sortCondition, setSortCondition] = useState("projectName"); //3 options: "projectName" or "orderDate" or "expirDate"

  const changeOption = option => {
    setOption(option);
  };

  const sortProjects = newSortCondition => {
    setSortCondition(newSortCondition);
  };

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
      status: "new" //there could be 4 types of status: new, started, completed, deleted;
    };

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
        option,
        sortCondition,
        addProject,
        changeStatus,
        removeProject,
        changeOption,
        sortProjects
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
}

export default ProjectsContext;
export { ProjectsProvider };
