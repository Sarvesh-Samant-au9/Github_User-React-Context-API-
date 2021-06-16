import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./Components/Layout/Navbar/Navbar";
import Users from "./Components/Users/Users";
import SearchBar from "./Components/Users/SearchBar";
import Alert from "./Components/Layout/Alert/Alert";
import About from "./Components/Pages/About";
import NotFound from "./Components/Pages/NotFound";
import ParticularUser from "./Components/Users/ParticularUser";

import GithubState from "./Context/Github/GithubState";
import AlertState from "./Context/Alert/AlertState";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="container-fluid">
            <Navbar />
            <Alert />
            <Switch>
              <Route
                path="/"
                exact
                render={(props) => {
                  return (
                    <>
                      <SearchBar />
                      <Users />
                    </>
                  );
                }}
              />
              <Route path="/about" component={About} exact />
              <Route
                exact
                path="/user/:id"
                render={(props) => <ParticularUser {...props} />}
              />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
