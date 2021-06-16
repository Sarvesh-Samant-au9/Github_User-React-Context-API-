// import React from "react";

// const Alert = ({ alert }) => {
//   // const { type } = alert;
//   // console.log(alert);
//   return alert.type && alert.message !== null ? (
//     <div className={`alert alert-${alert.type}`}>
//       {alert.message}
//       <i className="fas fa-info-circle"></i>
//     </div>
//   ) : null;
// };

// export default Alert;

import React, { useContext } from "react";
import AlertContext from "../../../Context/Alert/alertContext";
const Alert = () => {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        {alert.message}
        <i className="fas fa-info-circle"></i>
      </div>
    )
  );
};
export default Alert;
