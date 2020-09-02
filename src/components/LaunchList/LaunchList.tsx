import React from "react";
import { LaunchListQuery } from "../../generated/graphql";
import { Link } from "react-router-dom";

interface Props {
  data: LaunchListQuery;
}

const LaunchList: React.FC<Props> = ({ data }) => {
  console.log(data.launches);
  return (
    <>
      <div className="row">
        <div className="col-md-12 col-xs-12 col-sm-12 col-lg-4 text-white ">
          <div className="container">
            <h6>05/01/20</h6>{" "}
            <h2 style={{ fontWeight: "bolder" }}>
              NASA SELECTS LUNAR OPTIMIZED STARSHIP
            </h2>
            <h6>
              NASA selected SpaceX to develop a lunar optimized Starship to
              transport crew between lunar orbit and the surface of the Moon as
              part of NASA’s Artemis program.
            </h6>
            <br />
          </div>
        </div>
        <div className="col-md-12 col-xs-12 col-sm-12 col-lg-8">
          <div className="card-columns">
            {!!data.launches &&
              data.launches.map(
                (launch, i) =>
                  !!launch && (
                    <div className="card" key={i}>
                      <div className="card-body text-dark">
                        <h4
                          className="card-title"
                          style={{ fontWeight: "bold" }}
                        >
                          {launch.mission_name} ({launch.launch_year})
                        </h4>
                        <p className="card-text">
                          Launch year: {launch.launch_year}
                        </p>
                      </div>
                      <div className="card-footer">
                        <Link to={`launches/${launch.flight_number}`}>
                          <button type="button" className="btn btn-danger">
                            {` View >>`}
                          </button>
                        </Link>
                      </div>
                    </div>
                  )
              )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LaunchList;
