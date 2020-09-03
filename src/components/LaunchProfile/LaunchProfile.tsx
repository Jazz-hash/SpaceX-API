import React from "react";
import { LaunchProfileQuery } from "../../generated/graphql";

interface Props {
  data: LaunchProfileQuery;
}

const LaunchProfile: React.FC<Props> = ({ data }) => {
  if (!data.launch) {
    return <div>No launch available</div>;
  }
  return (
    <div className="card">
      <div className="card-body">
        <div style={{ fontWeight: "bolder" }}>
          <span>Flight {data.launch.flight_number}: </span>
          {data.launch.launch_success ? (
            <span className="text-success">Success</span>
          ) : (
            <span className="text-danger">Failed</span>
          )}
        </div>
        <h1 style={{ fontWeight: "bold" }}>
          {data.launch.mission_name}
          {data.launch.rocket &&
            ` (${data.launch.rocket.rocket_name} | ${data.launch.rocket.rocket_type})`}
        </h1>
        <p>{data.launch.details}</p>
        {!!data.launch.links && !!data.launch.links.flickr_images && (
          <div className="card-columns">
            {data.launch.links.flickr_images.map((image) =>
              image ? (
                <div className="card" key={image}>
                  <div className="card-body">
                    <img
                      src={image}
                      width="100%"
                      height="300px"
                      key={image}
                      alt="launch"
                    />
                  </div>
                </div>
              ) : null
            )}
          </div>
        )}
      </div>
      <br />
    </div>
  );
};

export default LaunchProfile;
