import React, { useContext } from "react";
import { ProjectsContext } from "../../../../context";

function Options() {
  const { changeOption, option } = useContext(ProjectsContext);

  return (
    <div className="Projects--list-options">
      <button
        className={`ActionBtn ${option === "active" ? "active" : false}`}
        onClick={() => changeOption("active")}
      >
        Active
      </button>
      <button
        className={`ActionBtn ${option === "deleted" ? "active" : false}`}
        onClick={() => changeOption("deleted")}
      >
        Deleted
      </button>
    </div>
  );
}

export default Options;
