import { Col, Image, Row } from "react-bootstrap";
import WeDOSection from "../WeDOSection/WeDOSection";

const ContentSide = ({ object, titleLayout }) => {
  const {
    title,
    text1,
    image,
    featuredImage,
    featuredTitle,
    featuredText,
    features,
    text2,
    text3,
  } = object;

  console.log(titleLayout);

  return (
    <div className="service-details">
      <div className="main-image image">
        <Image src={image.src} alt="" />
      </div>

      {titleLayout === "Leghorn Group" && <WeDOSection />}

      <div className="text-content">
        <h3>{title}</h3>
        <p>{text1}</p>

        <div className="featured">
          <Row className="clearfix">
            <Col md={6} sm={12} className="image-col">
              <div className="image">
                <Image src={featuredImage.src} alt="" />
              </div>
            </Col>
            <Col md={6} sm={12} className="text-col">
              <div className="inner">
                <h4>{featuredTitle}</h4>
                <p>{featuredText}</p>
                <ul>
                  {features.map((text, i) => (
                    <li key={i}>{text}</li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        </div>

        <p>{text2}</p>
        <p className="last">{text3}</p>
      </div>
    </div>
  );
};

export default ContentSide;
