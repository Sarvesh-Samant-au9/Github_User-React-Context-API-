import React from "react";

const ParticularRepo = (props) => {
  // console.log(props);
  const { description, name, html_url } = props.info;
  return (
    <div className="alert alert-success px-2 mx-3">
      <h6>
        <a href={html_url}>
          <span className="badge bg-dark">{name}</span>
        </a>
      </h6>
      {description && <p className="lead">{description}</p>}
    </div>
  );
};

export default ParticularRepo;
