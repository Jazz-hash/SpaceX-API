import React from "react";
import { useLaunchListQuery } from "../../generated/graphql";
import LaunchList from "./LaunchList";
import Layout from "../Layout";
import Navigation from "../Header";
import Footer from "../Footer";
import Loader from "../Loader";
import Error from "../Error";

const LaunchListContainer = () => {
  const { data, error, loading } = useLaunchListQuery();

  if (loading) {
    return (
      <Layout>
        <Loader />
      </Layout>
    );
  }

  if (error || !data) {
    return (
      <Layout>
        <Error />
      </Layout>
    );
  }

  return (
    <div>
      <header>
        <Navigation />
      </header>
      <br />
      <br />
      <section className="mt-5 pt-5" style={{ width: "90%", margin: "auto" }}>
        <LaunchList data={data} />
      </section>
      <br />
      <Footer />
    </div>
  );
};

export default LaunchListContainer;
