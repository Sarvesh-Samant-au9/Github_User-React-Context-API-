// import React, { Component } from "react";

// export default class SearchBar extends Component {
//   state = {
//     search: "",
//   };
//   onSubmit = (e) => {
//     e.preventDefault();
//     if (this.state.search === "") {
//       this.props.setAlert("Please Enter Something", "danger");
//     } else {
//       this.props.setAlert(null, null);
//       this.props.searchUsers(this.state.search);
//       this.setState({ search: "" });
//     }
//   };

//   render() {
//     return (
//       <>
//         <form onSubmit={this.onSubmit}>
//           <div className="mb-3">
//             <label htmlFor="searchbox" className="form-label">
//               Search Here
//             </label>
//             <input
//               placeholder="Enter Here..."
//               value={this.state.search}
//               type="text"
//               className="form-control"
//               id="searchbox"
//               aria-describedby="emailHelp"
//               onChange={(e) => {
//                 this.setState({ search: e.target.value });
//               }}
//             />
//           </div>
//           <div className="d-grid gap-2">
//             <input
//               type="submit"
//               value="Search"
//               className="btn btn-outline-primary"
//               onSubmit={onsubmit}
//             />
//           </div>
//         </form>
//         {this.props.showClear && (
//           <div className="d-grid gap-2 mt-3 mb-2">
//             <button
//               className="btn btn-outline-danger"
//               type="button"
//               onClick={this.props.clearUsers}
//             >
//               Clear
//             </button>
//           </div>
//         )}
//       </>
//     );
//   }
// }

import React, { useContext, useState } from "react";
import AlertContext from "../../Context/Alert/alertContext";
import GithubContext from "../../Context/Github/githubContext";

const SearchBar = (props) => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  // const {
  // setAlert,
  //  searchUsers,
  // showClear,
  // clearUsers,
  // } = props;
  const [search, setSearch] = useState("");

  const { setAlert } = alertContext;
  // Submission Of Form
  const onSubmit = (e) => {
    e.preventDefault();
    if (search === "") {
      setAlert("Please Enter Something Valid", "danger");
    } else {
      githubContext.searchUsers(search);
      setSearch("");
    }
  };

  // Form Changes unControlled to Controlled
  const onChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="searchbox" className="form-label">
            Search Here
          </label>
          <input
            placeholder="Enter Here..."
            value={search}
            type="text"
            className="form-control"
            id="searchbox"
            aria-describedby="emailHelp"
            onChange={onChange}
          />
        </div>
        <div className="row">
          <div className="col-10 col-md-3">
            
              <input
                type="submit"
                value="Search"
                className="btn btn-outline-primary"
                onSubmit={onsubmit}
              />

              {githubContext.users.length > 0 && (
                <button
                  className="btn btn-outline-danger mx-2"
                  type="button"
                  onClick={githubContext.clearUsers}
                >
                  Clear
                </button>
              )}
            
          </div>
        </div>
      </form>
      {/* {showClear  */}
    </>
  );
};

export default SearchBar;
