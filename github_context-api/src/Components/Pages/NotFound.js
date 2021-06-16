import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h1 className="text-center text-danger">
        404 <span className="text-warning">Page Not Found</span>
      </h1>
      <Link to="/" className="btn btn-outline-primary mt-3">
        Get Back To Home Page
      </Link>
    </>
  );
};

export default NotFound;
