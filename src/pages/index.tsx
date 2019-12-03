import React from "react";
import SEO from "../components/SEO";
import Layout from "../components/Layout";
import Header from "../components/Header";
import ProfileSection from "../components/Section/ProfileSection";

function IndexPage() {
  return (
    <Layout>
      <SEO title="Hello" />
      <Header />
      <ProfileSection />
    </Layout>
  );
}

export default IndexPage;
