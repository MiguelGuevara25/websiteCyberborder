import PageBanner from "@/components/BannerSection/PageBanner";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import SidebarPageContainer from "@/components/SidebarPageContainer/SidebarPageContainer";

const PageLeghornGroup = () => {
  return (
    <Layout pageTitle="Leghorn Group">
      <HeaderOne headerStyle="header-style-two" logo={4} />
      <MobileMenu />
      <PageBanner
        title="Leghorn Group"
        parent="Services"
        parentHref="/services"
      />
      <SidebarPageContainer titleLayout="Leghorn Group" />
      <MainFooter />
    </Layout>
  );
};

export default PageLeghornGroup;
