import BannerThree from "@/components/BannerSection/BannerThree";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import React from "react";

const Home = () => {
  return (
    <Layout pageTitle="CyberBorder">
      <HeaderOne headerStyle="header-style-two" logo={4} />
      <MobileMenu />
      <BannerThree />
    </Layout>
  );
};

export default Home;
