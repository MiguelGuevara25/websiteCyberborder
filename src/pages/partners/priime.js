import SidebarPageContainer from "@/components/SidebarPageContainer/SidebarPageContainer";
import PortadaPriime from "../../assets/images/portadaPriime.png";
import MainFooter from "@/components/MainFooter/MainFooter";
import MobileMenu from "@/components/Header/MobileMenu";
import HeaderOne from "@/components/Header/HeaderOne";
import Layout from "@/components/Layout/Layout";

const PagePriime = () => {
  return (
    <Layout pageTitle="Priime">
      <HeaderOne headerStyle="header-style-two" logo={4} />
      <MobileMenu />
      <section className="page-banner">
        <div
          className="image-layer"
          style={{
            backgroundImage: `url(${PortadaPriime.src})`,
          }}
        ></div>
        <div className="shape-2"></div>
        <div className="banner-inner">
          <div className="auto-container">
            <div className="inner-container clearfix">
              <h1>Priime Tech</h1>
            </div>
          </div>
        </div>
      </section>
      <SidebarPageContainer titleLayout="Priime Tech" />
      <MainFooter />
    </Layout>
  );
};

export default PagePriime;
