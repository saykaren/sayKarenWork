import React from "react";

const WorkContainer = ({
  source,
  altString,
  workName,
  demonstratesWork,
  codeLink,
  liveLink,
}) => {
  return (
    <>
      <section className="workPortfolio">
        <section className="front">
        <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="workDetails"
          >
          <img src={source} className="workImg front" alt={altString} />
          </a>
        </section>
        <section className="back">
          <span className="strong">Project Name:</span>
          <span className="workDetails">{workName}</span>
          <span className="strong">Demonstrates:</span>
          <span className="workDetails">{demonstratesWork}</span>
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="workDetails"
          >
            Code
          </a>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="workDetails"
          >
            Live Site
          </a>
        </section>
      </section>
    </>
  );
};

export default WorkContainer;
