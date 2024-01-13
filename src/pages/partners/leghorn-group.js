import PageBanner from "@/components/BannerSection/PageBanner";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import SidebarPageContainer from "@/components/SidebarPageContainer/SidebarPageContainer";
import PortadaLeghorn from "../../assets/images/portadaLeghorn.png";

const PageLeghornGroup = () => {
  return (
    <Layout pageTitle="Leghorn Group">
      <HeaderOne headerStyle="header-style-two" logo={4} />
      <MobileMenu />
      <section className="page-banner">
        <div
          className="image-layer"
          style={{
            backgroundImage: `url(${PortadaLeghorn.src})`,
          }}
        ></div>
        <div className="shape-2"></div>
        <div className="banner-inner">
          <div className="auto-container">
            <div className="inner-container clearfix">
              <h1>Leghorn Group</h1>
            </div>
          </div>
        </div>
      </section>
      <SidebarPageContainer titleLayout="Leghorn Group" />
      <MainFooter />
    </Layout>
  );
};

export default PageLeghornGroup;
