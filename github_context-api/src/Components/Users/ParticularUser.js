// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import Repo from "./Repo";

// export default class ParticularUser extends Component {
//   async componentDidMount() {
//     this.props.getUser(this.props.match.params.id);
//     this.props.getUserRepos(this.props.match.params.id);
//   }

//   render() {
//     const {
//       name,
//       avatar_url,
//       hireable,
//       html_url,
//       location,
//       company,
//       bio,
//       blog,
//       login,
//       followers,
//       following,
//       public_repos,
//       gists,
//     } = this.props.user;

//     const { loading } = this.props;
//     // console.log(company);
//     // console.log(this.props.match.params.id);
//     // console.log(this.props);
//     return (
//       <>
//         {loading === true ? (
//           <h5 className="text-center">Loading Data..</h5>
//         ) : (
//           <>
//             <div className="container">
//               <h1 className="text-center text-primary">{name}</h1>
//             </div>
//             <h3>
//               Hireable :{" "}
//               {hireable ? (
//                 <i className="fas fa-check text-green"></i>
//               ) : (
//                 <i className="fas fa-times-circle text-danger"></i>
//               )}
//             </h3>
//             <div className="card mx-auto" style={{ width: "90vw" }}>
//               <img
//                 src={avatar_url}
//                 style={{ maxHeight: "70vh", width: "90vw", display: "block" }}
//                 className="card-img-top mx-auto"
//                 alt="..."
//               />
//               <div className="card-body">
//                 <h5 className="card-title">
//                   {name} {"=>"} Lives at {location}{" "}
//                 </h5>
//                 <p className="card-text">
//                   {bio ? <> {bio} </> : "No Bio Available"}
//                 </p>

//                 <a href={html_url} className="btn btn-dark">
//                   Github Profile
//                 </a>

//                 <ul className="list-group">
//                   <li className="list-group-item">
//                     {login && (
//                       <>
//                         Username <span className="badge bg-success"></span>{" "}
//                       </>
//                     )}
//                   </li>
//                   <li className="list-group-item">
//                     {company && (
//                       <>
//                         Company{" "}
//                         {company.split("@").map((ele, index) => (
//                           <span
//                             className="badge bg-primary mx-2 mb-2"
//                             key={index}
//                           >
//                             {ele}
//                           </span>
//                         ))}
//                       </>
//                     )}
//                   </li>
//                   <li className="list-group-item">
//                     {blog && (
//                       <>
//                         Website <span className="badge bg-warning">{blog}</span>
//                       </>
//                     )}
//                   </li>
//                 </ul>
//               </div>

//               <h5 className="text-warning text-center">
//                 <span className="badge bg-primary">Followers {followers}</span>
//               </h5>

//               <h5 className="text-warning text-center">
//                 <span className="badge bg-danger">Following {following}</span>
//               </h5>

//               <h5 className="text-warning text-center">
//                 <span className="badge bg-success">
//                   Public Repos {public_repos}
//                 </span>
//               </h5>

//               <h5 className="text-warning text-center">
//                 <span className="badge bg-dark"> Gists {gists}</span>
//               </h5>
//               {/* {console.log(this.props.repos)} */}
//               <h2 className="text-dark text-center">
//                 <Repo repoInfo={this.props.repos} />
//               </h2>
//             </div>
//             <Link className="btn mt-3  mb-2 btn-outline-danger" to="/">
//               Return Back
//             </Link>
//           </>
//         )}
//       </>
//     );
//   }
// }

import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Repo from "./Repo";
import GithubContext from "../../Context/Github/githubContext";

const ParticularUser = (props) => {
  const githubContext = useContext(GithubContext);

  const { getUser, user, loading, getUserRepos } = githubContext;
  // console.log(githubContext);
  // console.log(props.match.params.id);
  useEffect(() => {
    getUser(props.match.params.id);
    getUserRepos(props.match.params.id);
    // eslint-disable-next-line
  }, []);

  // console.log(user);
  const {
    name,
    avatar_url,
    hireable,
    html_url,
    location,
    company,
    bio,
    blog,
    login,
    followers,
    following,
    public_repos,
    gists,
  } = user;
  // props.user;

  // const { loading } = props;

  return (
    <>
      {loading === true ? (
        <h5 className="text-center">Loading Data..</h5>
      ) : (
        <>
          <div className="container">
            <h1 className="text-center text-primary">{name}</h1>
          </div>
          <h3>
            Hireable :{" "}
            {hireable ? (
              <i className="fas fa-check text-green"></i>
            ) : (
              <i className="fas fa-times-circle text-danger"></i>
            )}
          </h3>
          <div className="card mx-auto" style={{ width: "90vw" }}>
            <img
              src={avatar_url}
              style={{ height: "50vh", width: "70vw", display: "block" }}
              className="card-img-top mx-auto"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">
                {name} {"=>"} Lives at {location}{" "}
              </h5>
              <p className="card-text">
                {bio ? <> {bio} </> : "No Bio Available"}
              </p>
              <a href={html_url} className="btn btn-dark">
                Github Profile
              </a>
              <ul className="list-group">
                <li className="list-group-item">
                  {login && (
                    <>
                      Username <span className="badge bg-success"></span>{" "}
                    </>
                  )}
                </li>
                <li className="list-group-item">
                  {company && (
                    <>
                      Company{" "}
                      {company.split("@").map((ele, index) => (
                        <span
                          className="badge bg-primary mx-2 mb-2"
                          key={index}
                        >
                          {ele}
                        </span>
                      ))}
                    </>
                  )}
                </li>
                <li className="list-group-item">
                  {blog && (
                    <>
                      Website <span className="badge bg-warning">{blog}</span>
                    </>
                  )}
                </li>
              </ul>
            </div>
            <h5 className="text-warning text-center">
              <span className="badge bg-primary">Followers {followers}</span>
            </h5>
            <h5 className="text-warning text-center">
              <span className="badge bg-danger">Following {following}</span>
            </h5>
            <h5 className="text-warning text-center">
              <span className="badge bg-success">
                Public Repos {public_repos}
              </span>
            </h5>
            <h5 className="text-warning text-center">
              <span className="badge bg-dark"> Gists {gists}</span>
            </h5>
            <h2 className="text-dark text-center">
              <Repo
              // repoInfo={props.repos}
              />
            </h2>
          </div>
          <Link className="btn mt-3  mb-2 btn-outline-danger" to="/">
            Return Back
          </Link>
        </>
      )}
    </>
  );
};

export default ParticularUser;
