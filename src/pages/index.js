import BannerThree from "@/components/BannerSection/BannerThree";
import CallToSection from "@/components/CallToSection/CallToSection";
import FeaturedSection from "@/components/FeaturedSection/FeaturedSection";
import FeaturesSectionTwo from "@/components/FeaturesSection/FeaturesSectionTwo";
import GallerySectionThree from "@/components/GallerySection/GallerySectionThree";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import ParallaxSection from "@/components/ParallaxSection/ParallaxSection";
import ProjectSeven from "@/components/ProjectSection/ProjectSeven";
import ServiceEight from "@/components/ServicesSection/ServiceEight";
import TestimonialsSectionTwo from "@/components/TestimonialsSection/TestimonialsSectionTwo";
import WeWorkSection from "@/components/WeWorkSection/WeWorkSection";
import WhyUs from "@/components/WhyUs/WhyUs";
import React from "react";

const Home = () => {
  return (
    <Layout pageTitle="Inicio">
      <HeaderOne headerStyle="header-style-two" logo={4} />
      <MobileMenu />
      <BannerThree />
      <FeaturedSection />
      <FeaturesSectionTwo />
      <WhyUs />
      <ServiceEight />
      <TestimonialsSectionTwo />
      <ProjectSeven />
      <GallerySectionThree />
      <ParallaxSection />
      <WeWorkSection />
      <CallToSection />
      <MainFooter />
    </Layout>
  );
};

export default Home;
