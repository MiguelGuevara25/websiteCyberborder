import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import SidebarPageContainer from "@/components/SidebarPageContainer/SidebarPageContainer";
import PortadaVMI from "../../assets/images/portadaVMI.png";

const PageVMISecurity = () => {
  return (
    <Layout pageTitle="VMI Security">
      <HeaderOne headerStyle="header-style-two" logo={4} />
      <MobileMenu />
      <section className="page-banner">
        <div
          className="image-layer"
          style={{
            backgroundImage: `url(${PortadaVMI.src})`,
          }}
        ></div>
        <div className="shape-2"></div>
        <div className="banner-inner">
          <div className="auto-container">
            <div className="inner-container clearfix">
              <h1>VMI Security</h1>
            </div>
          </div>
        </div>
      </section>
      <SidebarPageContainer titleLayout="VMI Security" />
      <MainFooter />
    </Layout>
  );
};

export default PageVMISecurity;
