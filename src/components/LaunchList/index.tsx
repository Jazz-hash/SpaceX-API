import React from "react";
import { useLaunchListQuery } from "../../generated/graphql";
import LaunchList from "./LaunchList";
import Layout from "../Layout";

const LaunchListContainer = () => {
  const { data, error, loading } = useLaunchListQuery();

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
      <LaunchList data={data} />
    </Layout>
  );
};

export default LaunchListContainer;
