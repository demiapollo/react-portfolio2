import React from 'react';

function ProjectItem({ title, imageSrc }) {
  return (
    <div className="project-item">
      <h3>{title}</h3>
      {/* <img src={`images/${imageSrc}`} alt={title} /> */}
      {/* Additional project item content */}
    </div>
  );
}

export default ProjectItem;
