import React from "react";
import { Link } from "react-router-dom";

const User = ({ eachUser }) => {
  return (
    <div className="col-md-3 mb-2 mt-1 col-12">
      <div className="card">
        <img
          src={eachUser.avatar_url}
          className="card-img-top"
          alt={eachUser.login}
          style={{
            height: "30vh",
            width: "20vw",
            display: "block",
            margin: "auto",
          }}
        />
        <div className="card-body">
          <h5 className="card-title">{eachUser.login}</h5>
          <p className="card-text">
            Card Shows Github User Icon, Click on button to see more Info of
            User.
          </p>
          <Link
            to={`/user/${eachUser.login}`}
            className="btn btn-outline-primary"
          >
            Detailed Info..
          </Link>
        </div>
      </div>
    </div>
  );
};

export default User;
