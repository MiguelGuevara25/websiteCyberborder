import featuredSection from "@/data/featuredSection";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const { image, title, text, features } = featuredSection;

const FeaturedSection = ({ className = "" }) => {
  return (
    <section className={`featured-section ${className}`}>
      <div className="auto-container">
        <Row className="row clearfix">
          <Col lg={6} md={12} sm={12} className="left-col">
            <div className="inner animated fadeInLeft">
              <div className="image-box">
                <Image
                  src="https://linoor-nextjs.vercel.app/_next/static/media/featured-image-7.87409611.jpg"
                  alt=""
                />
              </div>
            </div>
          </Col>
          <Col lg={6} md={12} sm={12} className="right-col">
            <div className="inner">
              <div className="sec-title">
                <h3 style={{ textTransform: "uppercase", margin: "0px" }}>
                  Quiénes Somos
                  <span className="dot">.</span>
                </h3>
                <div className="lower-text" style={{padding: "0px"}}>
                  En Cyberborders somos pioneros en el desarrollo de tecnología avanzada para smart ports. Nuestro objetivo es transformar la manera en que los puertos operan, garantizando que los procesos de entrada a las terminales sean más ordenados, eficientes, rápidos y seguros.
                </div>
              </div>
              <div className="features">
                <Row className="clearfix">
                  {features.map(({ id, title, text }) => (
                    <Col key={id} md={6} sm={12} className="feature">
                      <div className="inner-box">
                        <h6>{title}</h6>
                        <div className="text">{text}</div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default FeaturedSection;
