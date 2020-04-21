import React from "react";
import PropTypes from "prop-types";

function Project({ id, project, name, link }) {
  return (
    <div className="project__data">
      <div className="projet">
        <h3 className="project__title">{project}</h3>
      </div>
      <div className="data">
        <ul>
          {name.map((name, index) => (
            <li key={index} className="data__name">
              {name}
            </li>
          ))}
        </ul>
        <ul>
          {link.map((link, index) => (
            <a key={index} className="data__link" href={link}>{link}
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Project;
