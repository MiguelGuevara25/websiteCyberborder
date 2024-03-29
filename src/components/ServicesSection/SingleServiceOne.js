import React from "react";
import { Col } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";

const SingleServiceOne = () => {
  // const { icon, href, title } = service;

  return (
    <Col
      xl={3}
      lg={6}
      md={6}
      sm={12}
      className="service-block animated fadeInLeft"
    >
      <div className="inner-box">
        <div className="bottom-curve"></div>
        <div className="icon-box">
          <span></span>
        </div>
        <h6>
          <a href="#">
            <TextSplit text={"sdmsakdsaomkdaskmda"} />
          </a>
        </h6>
      </div>
    </Col>
  );
};

export default SingleServiceOne;
