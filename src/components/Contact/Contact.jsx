import React from "react";

export const Contact = () => {
  return (
    <article id="Contacto">
      <span className="title">Contacto</span>
      <div className="contactoContainer">
        <div>
          <span className="subtitle">Email</span>
          <p>
            <a href="mailto:davidfrailevegas@gmail.com">
              davidfrailevegas@gmail.com
            </a>
          </p>
        </div>
        <div>
          <span className="subtitle" target="_blank">
            GitHub
          </span>
          <p>
            <a href="">daviifv</a>
          </p>
        </div>
        <div>
          <span className="subtitle">Linkedin</span>
          <p>
            <a
              href="https://www.linkedin.com/in/david-fraile-vegas-8569b41b1"
              target="_blank"
            >
              David Fraile Vegas
            </a>
          </p>
        </div>
      </div>
    </article>
  );
};
