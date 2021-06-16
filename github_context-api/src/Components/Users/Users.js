import React, { useContext } from "react";
import User from "./User";
import GithubContext from "../../Context/Github/githubContext";
const Users = () => {
  const githubContext = useContext(GithubContext);
  console.log(githubContext);
  const { loading, users } = githubContext;
  if (loading) {
    return <h1 className="text-center">Loading... Users</h1>;
  }
  return (
    <div>
      <h1 className="text-center">Sample Github Users </h1>
      <div className="row">
        {users.map((user) => <User eachUser={user} key={user.id} />)}
        {/* {props.userInfo &&
          props.userInfo.map((user) => <User eachUser={user} key={user.id} />)} */}
      </div>
    </div>
  );
};

export default Users;
