import React, { useContext } from "react";
import "./index.scss";
import { Sidebar, Options, Filters } from "./pageParts";
import { SingleProject } from "../../components";
import { ProjectsContext } from "../../../context";

function Projects() {
  const { projects, option, sortCondition } = useContext(ProjectsContext);
  let filteredProjects = [];
  filteredProjects =
    option === "active"
      ? projects.filter(project => project.status !== "deleted")
      : projects.filter(project => project.status === "deleted");

  if (sortCondition === "projectName") {
    filteredProjects.sort((a, b) =>
      a.projectName > b.projectName ? 1 : b.projectName > a.projectName ? -1 : 0
    );
  } else if (sortCondition === "orderDate") {
    filteredProjects.sort((a, b) =>
      a.orderDate > b.orderDate ? 1 : b.orderDate > a.orderDate ? -1 : 0
    );
  } else if (sortCondition === "expirDate") {
    filteredProjects.sort((a, b) =>
      a.expirDate > b.expirDate ? 1 : b.expirDate > a.expirDate ? -1 : 0
    );
  }

  console.log(filteredProjects);

  return (
    <React.Fragment>
      <Sidebar />
      <div className="Projects--list">
        <Options />
        <Filters />
        <div className="Projects--list-board">
          {filteredProjects.map(data => (
            <SingleProject {...data} key={data.id} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Projects;
