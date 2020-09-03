import React from "react";
import loader from "./../images/loader.gif";
const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src={loader} height="300px" alt="loader" />
    </div>
  );
};

export default Loader;
