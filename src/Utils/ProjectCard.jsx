import React from "react";
import "../Style/ProjectCard.css";
const ProjectCard = (item) => {
  return (
    <>
      <div className="project_card" key={item.id}>
        <div className="project_info">
          <label className="project_title">{item.project.title}</label>
          <div className="project_links ">
            {item.project.demo && (
              <a
                className="project_link"
                rel="noreferrer"
                target={"_blank"}
                href={item.project.demo}
              >
                <div className="link-button">
                  <i class="fi fi-rr-globe"></i>Demo
                </div>
              </a>
            )}
            {item.project.github && (
              <a
                className="project_link"
                rel="noreferrer"
                target={"_blank"}
                href={item.project.github}
              >
                <div className="link-button">
                  <i class="devicon-github-original colored"></i>
                  Source
                </div>
              </a>
            )}
          </div>
          <p>{item.project.about}</p>
          <div className="project-tags">
            <h3>Tools:</h3>
            {item.project.tags.map((tag) => {
              return (
                <>
                  <label className="tag">{tag}</label>
                </>
              );
            })}
          </div>
        </div>
        <img src={item.project.image} className="project_image" alt="pic" />
      </div>
    </>
  );
};

export default ProjectCard;
