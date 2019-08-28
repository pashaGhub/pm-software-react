import React, { useContext } from "react";
import "./index.scss";
import { Sidebar, Options, Filters } from "./pageParts";
import { SingleProject } from "../../components";
import { ProjectsContext } from "../../../context";

function Projects() {
  const { projects, option, sortCondition } = useContext(ProjectsContext);
  const filteredProjects = projects.filter(({ status }) =>
    option === "active" ? status !== "deleted" : status === "deleted"
  );

  function sortBy(data, key) {
    return [...data].sort((a, b) =>
      a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0
    );
  }

  return (
    <React.Fragment>
      <Sidebar />
      <div className="Projects--list">
        <Options />
        <Filters />
        <div className="Projects--list-board">
          {sortBy(filteredProjects, sortCondition).map(data => (
            <SingleProject {...data} key={data.id} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Projects;
