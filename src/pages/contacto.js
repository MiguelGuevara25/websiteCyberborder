import PageBanner from "@/components/BannerSection/PageBanner";
import GetQuoteTwo from "@/components/GetQuote/GetQuoteTwo";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";

const PageContacto = () => {
  return (
    <Layout pageTitle="Contact">
      <HeaderOne headerStyle="header-style-two" logo={4} />
      <MobileMenu />
      <PageBanner title="Contact" />
      <GetQuoteTwo />
      <MainFooter />
    </Layout>
  );
};

export default PageContacto;
