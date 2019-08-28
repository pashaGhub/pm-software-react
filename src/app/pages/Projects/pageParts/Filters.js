import React, { useContext } from "react";
import { ProjectsContext } from "../../../../context";

function Filters() {
  const { sortCondition, sortProjects } = useContext(ProjectsContext);

  return (
    <div className="Projects--list-header">
      <label>Sort by: </label>
      <button
        className={`Projects--list-header-filter ${
          sortCondition === "projectName" ? "active" : false
        }`}
        onClick={() => sortProjects("projectName")}
      >
        Project name
      </button>
      <button
        className={`Projects--list-header-filter ${
          sortCondition === "orderDate" ? "active" : false
        }`}
        onClick={() => sortProjects("orderDate")}
      >
        Order date
      </button>
      <button
        className={`Projects--list-header-filter ${
          sortCondition === "expirDate" ? "active" : false
        }`}
        onClick={() => sortProjects("expirDate")}
      >
        Expiration date
      </button>
    </div>
  );
}

export default Filters;
