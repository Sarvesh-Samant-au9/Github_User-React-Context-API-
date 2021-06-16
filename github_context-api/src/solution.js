// import axios from "axios";
const axios = require("axios");
const key = require("./jey");
const searchUsers = async (search) => {
  console.log(key);
  // const { data } = await axios.get(
  // `https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_GAMEKEY}&dates=2019-09-01,2019-09-30`
  // );
  const { data } = await axios.get(
    `https://api.rawg.io/api/games?key=${key}&dates=2019-09-01,2019-09-30`
  );
  console.log(process.env.REACT_APP_APIKEY);
  console.log(process.env.REACT_APP_GITHUB_CLIENT);
  console.log(process.env);
  console.log(data);
};

searchUsers("Sarvesh");
