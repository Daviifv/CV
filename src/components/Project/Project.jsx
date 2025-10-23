import React from "react";
import "../Project/project.css";
export const Project = ({ title, p1, p2, p3, img, link }) => {
  return (
    <>
      <a href={link}>
        <div className="containerProject">
          <div className="containerTexts">
            <span className="subtitle">{title}</span>
            <div>
              <p>{p1}</p>
              <p>{p2}</p>
              <p>{p3}</p>
            </div>
          </div>
          <div className="containerImg">
            <img src={`/src/assets/${img}.png`} alt={`Img de ${title}`} />
          </div>
        </div>
      </a>
    </>
  );
};
