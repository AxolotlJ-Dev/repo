import React, { useEffect, useState } from "react";
import "../style/NavBar.css";

//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import EsEn from "../components/EsEn";


const NavBar = () => {
  const [stateNav, setStateNav] = useState(false);
  const { t } = useTranslation();

  const [isActiveBody, setIsActiveBody] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");
    if ( isActiveBody ){
      body.classList.add("bodyBlock");
    } else {
      body.classList.remove("bodyBlock");
    }
  },[isActiveBody]);

  return (
    <nav>
      <button className="btnNav " onClick={() => {setStateNav(!stateNav); setIsActiveBody(!isActiveBody);}} >
        <FontAwesomeIcon color="#fff" icon={faBars} />
      </button>

      <div className={`${stateNav ? " subLinks activeNav  " : "null d-none"}`}>
        <div className="subLinks fontArc">
          <ul>
            <li>
              <a
                onClick={() => {setStateNav(!stateNav); setIsActiveBody(!isActiveBody);}}
                
                href="#Home"
                // className={({ isActive, isPending }) =>
                //   isPending ? "pending" : isActive ? "active" : ""
                // }
              >
                {t("navNamesHome")}
              </a>
            </li>
            <li>
              <a
                onClick={() => {setStateNav(!stateNav); setIsActiveBody(!isActiveBody);}}
                href="#AboutMe"
                // className={({ isActive, isPending }) =>
                //   isPending ? "pending" : isActive ? "active" : ""
                // }
              >
                {t("navNameAboutMe")}
              </a>
            </li>
            <li>
              <a
                onClick={() => {setStateNav(!stateNav); setIsActiveBody(!isActiveBody);}}
                href="#Skill"
                // className={({ isActive, isPending }) =>
                //   isPending ? "pending" : isActive ? "active" : ""
                // }
              >
                {t("navNameSkills")}
              </a>
            </li>
            <li>
              <a
                onClick={() => {setStateNav(!stateNav); setIsActiveBody(!isActiveBody);}}
                href="#Projects"
                // className={({ isActive, isPending }) =>
                //   isPending ? "pending" : isActive ? "active" : ""
                // }
                >
                {t("navNameProjects")}
              </a>
            </li>
            
            <div className=" Navlanguage text-center">
              <EsEn />
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
