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
    <div>
      <span>Flight {data.launch.flight_number}: </span>
    </div>
  );
};

export default LaunchProfile;
