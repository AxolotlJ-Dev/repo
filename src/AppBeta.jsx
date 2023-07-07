import React from "react";
import "./App.css";
import Skill from "./components/Skill";
import NavLoc from "./components/Navloc";
import {
  faBootstrap,
  faCss3Alt,
  faFacebook,
  faGitAlt,
  faGithub,
  faHtml5,
  faInstagram,
  faJsSquare,
  faNodeJs,
  faPython,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import Proyect from "./components/Proyect";
import {
  faCalculator,
  faCloudMoon,
  faHeart,
  faPaw,
  faStamp,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import { useTranslation } from "react-i18next";
import NavBar from "./nav/NavBar";
import Contact from "./components/Contact";


function App() {

  const { t } = useTranslation();
  return (
    <div className="App">
      <div id="Home" className="intro text-uppercase d-flex justify-content-center align-items-center flex-column">
        <h1 className="text-uppercase display-1 text-center">{`<>`}</h1>
        <h1 className=" display-4 text-center">Axolotlj-dev</h1>
      </div>

      <NavBar />

      <div className=" container mt-5 mb-5">
        <div className="row mb-5 "  id="AboutMe">
          <div className="col-md-6 d-flex justify-content-center align-items-center textIntro">
            {/* <img
              className=" img-fluid rounded-5"
              src={require("./img/logoMiniBN.png")}
              alt="Logo blanco y negro"
            /> */}
            <p className=" display-6 ">
              {/* ウーパールートル */} アホロートル開発
            </p>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <p className=" h3">
              {t("introduction")}

              {/* Hola, mi nombre es Axolotl-Dev y soy un desarrollador web con
              experiencia en diversas tecnologías como ReactJS, JavaScript,
              HTML, CSS, JSON y Bootstrap, entre otros. Además, tengo
              habilidades para trabajar en equipo y capacidad para encontrar
              soluciones rápidas y efectivas a los desafíos que se presentan en
              un proyecto. Si estás buscando un desarrollador confiable y capaz,
              ¡estoy aquí para ayudar! */}
            </p>
          </div>
          <hr />
        </div>
        <div id="Skill" className="skills ">
          <NavLoc text={t("navlocSkill")} styleNav="mb-4" />

          <div className="row">
            <div className="col-4">
              <Skill icon={ faHtml5 } />
            </div>
            <div className="col-4">
              <Skill icon={ faCss3Alt } />
            </div>
            <div className="col-4">
              <Skill icon={ faJsSquare } />
            </div>
              {/* 2da fila */}
            <div className="col-4">
              <Skill icon={faBootstrap} />
            </div>
            <div className="col-4">
              <Skill icon={faSass} />
            </div>
            <div className="col-4">
            <Skill icon={faReact} />
            </div>
            {/* 3er fila */}
            <div className="col-4">
              <Skill icon={faNodeJs} />
            </div>
            <div className="col-4">
              <Skill icon={faPython} />
            </div>
            <div className="col-4">
              <Skill icon={faGitAlt} />
            </div>
          </div>
        </div>

        <div id="Projects" className="Proyects">
          <NavLoc styleNav="mb-4" text={t("navlocProjects")} />
          <div className="row">
            <div className="col-lg-4 d-flex justify-content-center">
              <Proyect
                icon={faUser}
                title={t("projectsNameLogin")}
                linkGitH="https://github.com/AxolotlJ-Dev/Login-1"
                linkProgram="https://axolotlj-dev.github.io/Login-1/"
              />
            </div>

            <div className="col-lg-4  d-flex justify-content-center">
              <Proyect
                icon={faPaw}
                title={t("projectsNameVeterinaryBootstrap")}
                linkGitH="https://github.com/AxolotlJ-Dev/veterinary-Bootstrap"
                linkProgram="https://axolotlj-dev.github.io/veterinary-Bootstrap/"
              />
            </div>
            <div className="col-lg-4  d-flex justify-content-center">
              <Proyect
                icon={faCloudMoon}
                title={t("projectsNameClimaReact")}
                linkGitH="https://github.com/AxolotlJ-Dev/Clima-React"
                linkProgram="https://axolotlj-dev.github.io/Clima-React/"
              />
            </div>
          </div>
          {/* segunda fila */}
          <div className="row">
            <div className="col-lg-4 d-flex justify-content-center">
              <Proyect
                icon={faHeart}
                title={t("projectsNameProposalLove")}
                linkGitH="https://github.com/AxolotlJ-Dev/propuestaPolola"
                linkProgram="https://axolotlj-dev.github.io/propuestaPolola/polola"
              />
            </div>

            <div className="col-lg-4  d-flex justify-content-center">
              <Proyect
                icon={faStamp}
                title={t("projectsNamePCYD")}
                linkGitH="https://github.com/AxolotlJ-Dev/PCYD"
                linkProgram="https://axolotlj-dev.github.io/PCYD/"
              />
            </div>
            <div className="col-lg-4  d-flex justify-content-center">
              <Proyect
                icon={faCalculator}
                title={t("projectsNameCalculator")}
                linkGitH="https://github.com/AxolotlJ-Dev/Calculadora-React"
                linkProgram="https://axolotlj-dev.github.io/Calculadora-React/"
              />
            </div>
          </div>

          {/* Contact */}
          <NavLoc styleNav="mb-4" text="Contact" />
          <div className=" Contact">
            <div className="row ">
              <div className="col-4 ">
                <Contact icon={ faFacebook }/>
              </div>
              <div className="col-4">
                <Contact icon={ faInstagram }/>
              </div>
              <div className="col-4">
                <Contact icon={ faGithub }/>
              </div>
              <div className="col-12">
                <Contact icon={ faGithub }/>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
