import React, { useContext } from "react";
import "./index.scss";
import { Sidebar, Options, Filters } from "./pageParts";
import { SingleProject } from "../../components";
import { ProjectsContext } from "../../../context";

function Projects() {
  const { projects } = useContext(ProjectsContext);

  return (
    <React.Fragment>
      <Sidebar />
      <div className="Projects--list">
        <Options />
        <Filters />
        <div className="Projects--list-board">
          {projects.map(data => (
            <SingleProject {...data} key={data.id} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Projects;
