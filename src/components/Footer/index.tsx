import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-copyright text-center py-3 text-white">
      <h6>
        © 2020 Copyright: SpaceX {` `}
        <br />
        <span className="mt-2">
          <Link
            className="text-white"
            to="https://github.com/Jazz-hash"
            style={{ fontWeight: "bolder" }}
          >
            Muhammad Jazzel Mehmood - jazzelmehmood4@gmail.com -
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </span>
      </h6>
    </div>
  );
};

export default Footer;
