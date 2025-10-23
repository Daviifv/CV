import "./App.css";
import { Tecnologias } from "./components/Tecnologias/tecnologias";
import { Menu } from "./components/Nav/Menu";
import { Project } from "./components/Project/Project";
import { Contact } from "./components/Contact/Contact";
function App() {
  return (
    <div className="all">
      <header>
        <h1>David Fraile Vegas</h1>
        <Menu />
      </header>
      <main>
        <article className="inicioContainer" id="inicio">
          <div>
            <h1 className="inicio">Full Stack Developer</h1>
            <p className="aboutMe">
              Desarrollador Full Stack recién graduado en Desarrollo de
              Aplicaciones Multiplataforma. Cuento con conocimientos prácticos
              en React, Java, Python y gestión de bases de datos, aplicados en
              proyectos personales funcionales. Busco mi primera oportunidad
              profesional donde pueda aportar mis habilidades técnicas, aprender
              de profesionales experimentados y contribuir al éxito del equipo.
            </p>
            <div className="imgContactosContainer">
              <a href="https://github.com/Daviifv" target="_blank">
                <img src="/assets/github.webp" alt="Logo Github" />
              </a>
              <a
                href="https://www.linkedin.com/in/david-fraile-vegas-8569b41b1"
                target="_blank"
              >
                <img src="/assets/linkedin.svg" alt="Logo Linkedin" />
              </a>
              <a href="mailto:davidfrailevegas@gmail.com" target="_blank">
                <img src="/assets/email.svg" alt="Logo Linkedin" />
              </a>
            </div>
          </div>
        </article>
        <article id="sobreMi">
          <span className="title">Tecnologías</span>
          <div className="tecnologiasContainer">
            <Tecnologias nombre={"java"} />
            <Tecnologias nombre={"css"} />
            <Tecnologias nombre={"js"} />
            <Tecnologias nombre={"mongodb"} />
            <Tecnologias nombre={"python"} />
            <Tecnologias nombre={"react"} />
            <Tecnologias nombre={"sql"} />
          </div>
        </article>
        <article id="Proyectos">
          <span className="title">Proyectos</span>
          <Project
            title="Web Scout"
            p1="Desarrollo de un sitio web para mi grupo scout, incluyendo un panel de control diseñado para optimizar la gestión interna."
            p2="El panel permite actualizar fácilmente fotografías, circulares y contactos telefónicos, mejorando la comunicación del grupo."
            p3="El sistema se gestiona mediante una API en PHP y la interfaz se ha desarrollado utilizando React."
            img="scout"
            link="https://www.scoutpleyadessalamanca.es"
          />
        </article>
        {/* <Contact/> */}
      </main>
    </div>
  );
}

export default App;
