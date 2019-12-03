import React from "react";
import SEO from "../components/SEO";
import Layout from "../components/Layout";
import Header from "../components/Header";

function IndexPage() {
  return (
    <Layout>
      <SEO title="Hello" />
      <Header />
    </Layout>
  );
}

export default IndexPage;
