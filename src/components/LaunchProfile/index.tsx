import React from "react";
import { useParams } from "react-router-dom";

import { useLaunchProfileQuery } from "../../generated/graphql";
import LaunchProfile from "./LaunchProfile";
import Layout from "../Layout";

const LaunchProfileContainer = () => {
  const { id } = useParams();
  const { data, error, loading } = useLaunchProfileQuery({
    variables: { id },
  });

  if (loading) {
    return (
      <Layout>
        <div>Loading...</div>
      </Layout>
    );
  }

  if (error || !data) {
    return (
      <Layout>
        <div>ERROR</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <LaunchProfile data={data} />
    </Layout>
  );
};

export default LaunchProfileContainer;
