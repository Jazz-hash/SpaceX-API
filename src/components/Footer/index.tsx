import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-copyright text-center py-3 text-white">
      © 2020 Copyright: SpaceX |{` `}
      <Link
        className="text-white"
        to="https://github.com/Jazz-hash"
        style={{ fontWeight: "bolder" }}
      >
        Muhammad Jazzel Mehmood - jazzelmehmood4@gmail.com -
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </div>
  );
};

export default Footer;
