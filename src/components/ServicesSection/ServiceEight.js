import { serviceEight } from "@/data/servicesSection";
import Link from "next/link";
import React from "react";
import { Col, Row } from "react-bootstrap";

const { text, title, services } = serviceEight;

const ServiceEight = () => {
  return (
    <section className="service-eight">
      <div className="auto-container">
        <div className="sec-title-two text-center">
          <p>{text}</p>
          <h2>{title}</h2>
        </div>

        <Row className="d-flex align-items-stretch">
          {services.map(({ id, icon, title }) => (
            <Col key={id} md={6} lg={3} className="animated fadeInLeft">
              <div className="service-eight__card d-flex flex-column h-100">
                <div className="service-eight__card__inner d-flex flex-column h-100">
                  <h3 className="service-eight__title">
                    {title}
                  </h3>
                  <div className="service-eight__icon d-flex h-100 align-items-end">
                    <img
                      src={require(`../../assets/images/${icon}`).default.src}
                      width={70}
                    />
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default ServiceEight;
