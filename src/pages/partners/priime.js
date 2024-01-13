import PageBanner from "@/components/BannerSection/PageBanner";
import CallToSectionTwo from "@/components/CallToSection/CallToSectionTwo";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import SidebarPageContainer from "@/components/SidebarPageContainer/SidebarPageContainer";

const PagePriime = () => {
  return (
    <Layout pageTitle="Priime">
      <HeaderOne headerStyle="header-style-two" logo={4} />
      <MobileMenu />
      <PageBanner title="Smart Gates" parent="Services" parentHref="/services" />
      <SidebarPageContainer titleLayout="Priime" />
      <MainFooter />
    </Layout>
  );
};

export default PagePriime;
