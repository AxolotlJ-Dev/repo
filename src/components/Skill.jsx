import React from "react";
import "../style/Skill.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Skill = (props) => {
  return (
    <div>
      <div className="skill display-1 m-3 d-flex justify-content-center align-items-center">
        <FontAwesomeIcon  icon={props.icon} />
      </div>

      
    </div>
  );
};

export default Skill;
