import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from "../types";

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);
  // const [state, dispatch] = useReducer;

  //SearchUser
  const searchUsers = async (search) => {
    setLoading();
    const { data } = await axios.get(
      `https://api.github.com/search/users?q=${search}&?client_id=${process.env.REACT_APP_GITHUB_CLIENT}&client_secret=${process.env.REACT_APP_GITHUB_SECRET}`
    );
    dispatch({
      type: SEARCH_USERS,
      payload: data.items,
    });
  };

  //GetUser

  const getUser = async (username) => {
    setLoading();
    const { data } = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT}&client_secret=${process.env.REACT_APP_GITHUB_SECRET}`
    );
    // console.log(data);
    dispatch({
      type: GET_USER,
      payload: data,
    });
  };

  //GetRepos
  const getUserRepos = async (username) => {
    setLoading();
    const { data } = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT}&client_secret=${process.env.REACT_APP_GITHUB_SECRET}`
    );
    // console.log(data);

    dispatch({
      type: GET_REPOS,
      payload: data,
    });
  };

  //Clearusers
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  const setLoading = () =>
    dispatch({
      type: SET_LOADING,
    });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        getUser,
        clearUsers,
        getUserRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
