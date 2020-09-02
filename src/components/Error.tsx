import React from "react";
import error from "./error.gif";
const Error = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src={error} height="300px" alt="loader" />
    </div>
  );
};

export default Error;
