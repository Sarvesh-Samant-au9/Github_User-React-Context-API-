import React, { useContext } from "react";
import ParticularRepo from "./ParticularRepo";
import GithubContext from "../../Context/Github/githubContext";
const Repo = (props) => {
  const githubContext = useContext(GithubContext);
  // console.log(githubContext);
  const { repos } = githubContext;
  // console.log(props);
  return repos.length > 0 ? (
    repos.map((ele, index) => <ParticularRepo key={index} info={ele} />)
  ) : (
    <p className="text center text-danger">No Repos Present</p>
  );
  // return props.repoInfo.length > 0 ? (
  //   props.repoInfo.map((ele, index) => (
  //     <ParticularRepo info={ele} key={index} />
  //   ))
  // ) : (
  //   <p className="text center text-danger">No Repos Present</p>
  // );
};

export default Repo;
