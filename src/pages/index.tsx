import React from "react";
import SEO from "../components/SEO";
import Layout from "../components/Layout";
import Header from "../components/Header";
import ProfileSection from "../components/Section/ProfileSection";
import PortfolioSection from "../components/Section/PortfolioSection";
import BlogSection from '../components/Section/BlogSection';

function IndexPage() {
  return (
    <Layout>
      <SEO title="Hello" />
      <Header />
      <ProfileSection />
      <PortfolioSection />
      <BlogSection />
    </Layout>
  );
}

export default IndexPage;
