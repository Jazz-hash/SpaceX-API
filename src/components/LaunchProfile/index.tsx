import React from "react";
import { useParams } from "react-router-dom";

import { useLaunchProfileQuery } from "../../generated/graphql";
import LaunchProfile from "./LaunchProfile";
import Layout from "../Layout";
import Loader from "../Loader";
import Error from "../Error";
import Navigation from "../Header";
import Footer from "../Footer";

const LaunchProfileContainer = () => {
  const { id } = useParams();
  const { data, error, loading } = useLaunchProfileQuery({
    variables: { id },
  });

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
        <LaunchProfile data={data} />
      </section>
      <br />
      <Footer />
    </div>
  );
};

export default LaunchProfileContainer;
