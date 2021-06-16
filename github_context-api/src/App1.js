// import React, { useEffect, useState } from "react";
// function App() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     setLoading(true);
//     axios
//       .get(
//         `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT}&client_secret=${process.env.REACT_APP_GITHUB_SECRET}`
//       )
//       .then(({ data }) => setUsers(data));
//     console.log(users);
//     setLoading(false);
//   }, []);
//   return (
//     <div className="container">
//       <Navbar />
//       <SearchBar />
//       {loading ? (
//         <h1 className="text-center"> Loading... </h1>
//       ) : (
//         <Users userInfo={users} />
//       )}
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./Components/Layout/Navbar/Navbar";
import Users from "./Components/Users/Users";
import SearchBar from "./Components/Users/SearchBar";
import Alert from "./Components/Layout/Alert/Alert";
import About from "./Components/Pages/About";
import NotFound from "./Components/Pages/NotFound";
import ParticularUser from "./Components/Users/ParticularUser";

import GithubState from "./Context/Github/GithubState";

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setuser] = useState({});
  const [repos, setRepos] = useState([]);
  const [alert, setalert] = useState(null);
  const [loading, setLoading] = useState(true);
  // state = {
  //   users: [],
  //   user: {},
  //   loading: true,
  //   alert: null,
  //   repos: [],
  // };

  const clearUsers = () => {
    // this.setState({ users: [], loading: false });
    setLoading(false);
    setUsers([]);
  };

  const setAlert = (message, type) => {
    // this.setState({
    //   alert: {
    //     message: message,
    //     type: type,
    //   },
    // });
    setalert({ message: message, type: type });
    setTimeout(() => {
      setalert({
        message: null,
        type: null,
      });
    }, 2000);
  };
  // const searchUsers = async (search) => {
  //   // this.setState({ loading: true });

  //   setLoading(true);
  //   // console.log(search);
  //   const { data } = await axios.get(
  //     `https://api.github.com/search/users?q=${search}&?client_id=${process.env.REACT_APP_GITHUB_CLIENT}&client_secret=${process.env.REACT_APP_GITHUB_SECRET}`
  //   );
  //   // this.setState({
  //   //   users: data.items,
  //   //   loading: false,
  //   // });
  //   setUsers(data.items);
  //   setLoading(false);
  //   // console.log(this.state.users);
  // };

  const getUser = async (username) => {
    // this.setState({ loading: true });
    setLoading(true);
    const { data } = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT}&client_secret=${process.env.REACT_APP_GITHUB_SECRET}`
    );
    // this.setState({
    // user: data,
    // loading: false,
    // });
    setuser(data);
    setLoading(false);
    // console.log(this.state);
  };

  const getUserRepo = async (username) => {
    // this.setState({ loading: true });
    setLoading(true);
    const { data } = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT}&client_secret=${process.env.REACT_APP_GITHUB_SECRET}`
    );
    setRepos(data);
    setLoading(false);
    // this.setState({ repos: data, loading: false });
    // console.log(this.state);
  };
  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const { data } = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT}&client_secret=${process.env.REACT_APP_GITHUB_SECRET}`
  //   );
  //   this.setState({
  //     users: data,
  //     loading: false,
  //   });
  // }

  return (
    <GithubState>
      <Router>
        <div className="container-fluid">
          <Navbar />
          {/* {this.state.alert !== null ? <Alert alert={this.state.alert} /> : null} */}
          {alert !== null ? <Alert alert={alert} /> : null}
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => {
                return (
                  <>
                    <SearchBar
                      // searchUsers={this.searchUsers}
                      // clearUsers={this.clearUsers}
                      // showClear={this.state.users.length > 0 ? true : false}
                      // setAlert={this.setAlert}
                      // searchUsers={searchUsers}
                      clearUsers={clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={setAlert}
                    />
                    {/* {this.state.loading ? ( */}
                    {loading ? (
                      <h4 className="text-center">
                        Enter Something in Search Box..{" "}
                      </h4>
                    ) : (
                      // <Users userInfo={this.state.users} />
                      <Users userInfo={users} />
                    )}
                  </>
                );
              }}
            />
            <Route path="/about" component={About} exact />
            <Route
              exact
              path="/user/:id"
              render={(props) => (
                <ParticularUser
                  {...props}
                  getUser={getUser}
                  user={user}
                  loading={loading}
                  repos={repos}
                  getUserRepos={getUserRepo}
                  // user={this.state.user}
                  // loading={this.state.loading}
                  // getUserRepos={this.getUserRepo}
                  // repos={this.state.repos}
                  // getUser={this.getUser}
                />
              )}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
