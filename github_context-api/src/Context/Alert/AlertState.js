import React, { useReducer } from "react";
import { REMOVE_ALERT, SET_ALERT } from "../types";
import AlertContext from "./alertContext";
import AlertReducer from "./alertReducer";
const AlertState = (props) => {
  const initialState = null;
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  //Set alert
  const setAlert = (message, type) => {
    dispatch({
      type: SET_ALERT,
      payload: {
        message: message,
        type: type,
      },
    });

    setTimeout(() => {
      dispatch({
        type: REMOVE_ALERT,
      });
    }, 2000);
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
