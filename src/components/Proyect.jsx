import React from "react";
import "../style/Proyect.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Proyect = (props) => {
  return (
    <div className=" proyectCard ">
      <div className="card mb-5">
        <div className="content">
          <div className="iconBx">
            <FontAwesomeIcon icon={props.icon} />
          </div>
          <div className="contentBx">
            <h3>{props.title}</h3>
          </div>
        </div>
        <ul className="sci">
          <li>
            <a target="_blank" rel="noopener noreferrer" href={props.linkGitH}>
              {" "}
              <FontAwesomeIcon icon={faGithub} />{" "}
            </a>
          </li>
          <li>
            <a target="_blank" rel="noopener noreferrer" href={props.linkProgram}>
              {" "}
              <FontAwesomeIcon icon={faSignInAlt} />{" "}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Proyect;
