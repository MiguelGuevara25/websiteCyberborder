import PageBanner from "@/components/BannerSection/PageBanner";
import CallToSectionTwo from "@/components/CallToSection/CallToSectionTwo";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import SidebarPageContainer from "@/components/SidebarPageContainer/SidebarPageContainer";
import React from "react";

const PageVMISecurity = () => {
  return (
    <Layout pageTitle="VMI Security">
      <HeaderOne headerStyle="header-style-two" logo={4} />
      <MobileMenu />
      <PageBanner
        title="VMI Security"
        parent="Services"
        parentHref="/services"
      />
      <SidebarPageContainer titleLayout="VMI Security" />
      <MainFooter />
    </Layout>
  );
};

export default PageVMISecurity;
