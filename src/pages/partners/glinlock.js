import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import SidebarPageContainer from "@/components/SidebarPageContainer/SidebarPageContainer";
import PortadaGlinlock from "../../assets/images/portadaGlinlock.png";

const PageGlinlock = () => {
  return (
    <Layout pageTitle="Glinlock">
      <HeaderOne headerStyle="header-style-two" logo={4} />
      <MobileMenu />
      <section className="page-banner">
        <div
          className="image-layer"
          style={{
            backgroundImage: `url(${PortadaGlinlock.src})`,
          }}
        ></div>
        <div className="shape-2"></div>
        <div className="banner-inner">
          <div className="auto-container">
            <div className="inner-container clearfix">
              <h1>Glinlock</h1>
            </div>
          </div>
        </div>
      </section>
      <SidebarPageContainer titleLayout="Glinlock" />
      <MainFooter />
    </Layout>
  );
};

export default PageGlinlock;
