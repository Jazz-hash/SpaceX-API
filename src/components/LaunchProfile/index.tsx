import React from "react";
import { useParams } from "react-router-dom";

import { useLaunchProfileQuery } from "../../generated/graphql";
import LaunchProfile from "./LaunchProfile";

const LaunchProfileContainer = () => {
  const { id } = useParams();
  const { data, error, loading } = useLaunchProfileQuery({
    variables: { id },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return <LaunchProfile data={data} />;
};

export default LaunchProfileContainer;
