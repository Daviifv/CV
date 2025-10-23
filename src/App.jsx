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
                <img src="/src/assets/github.webp" alt="Logo Github" />
              </a>
              <a href="https://www.linkedin.com/in/david-fraile-vegas-8569b41b1" target="_blank">
                <img src="/src/assets/linkedin.svg" alt="Logo Linkedin" />
              </a>
              <a href="mailto:davidfrailevegas@gmail.com" target="_blank">
                <img src="/src/assets/email.svg" alt="Logo Linkedin" />
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
            p1="Web para mi grupo de scout, en la que para mayor facilidad les cree un panel de control."
            p2="Desde este pueden actualizar las fotos, las circulares y los números de teléfono"
            p3="Todo se gestiona gracias a una API en PHP y la página se ha desarrollado con React"
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
