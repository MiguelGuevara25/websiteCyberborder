import React, { forwardRef } from "react";
import TextSplit from "../Reuseable/TextSplit";

const SlideItemThree = ({ slide = {} }, ref) => {
  const { bg, title, text } = slide;

  return (
    <div style={{ userSelect: "none" }} ref={ref} className="slide-item">
      <div className="round-shape-1"></div>
      <div className="round-image">
        <div
          className="image"
          style={{
            backgroundImage: `url(${
              require(`../../assets/images/${bg}`).default.src
            })`,
          }}
        ></div>
      </div>
      <div className="auto-container">
        <div className="content-box">
          <div className="content">
            <div className="inner">
              <h1 className="text-white">
                <TextSplit text={title} />
              </h1>
              <div className="text text-white">{text}</div>
              {/* <div className="link-box">
                <Link href="/about">
                  <a className="theme-btn btn-style-two">
                    <i className="btn-curve"></i>
                    <span className="btn-title">Discover More</span>
                  </a>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default forwardRef(SlideItemThree);
