import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";
import { SwiperSlide } from "swiper/react";

const SingleProject = ({ project = {} }) => {
  const { image, title, category } = project;
  let urlPartner = "";

  switch (title) {
    case "Tótems con OCR":
      urlPartner = `/partners/priime`;
      break;

    case "Scanners de Rayos X":
      urlPartner = `/partners/vmi-security`;
      break;

    case "Precintos RFID":
      urlPartner = `/partners/leghorn-group`;
      break;

    case "Precintos Electrónicos":
      urlPartner = `/partners/glinlock`;
      break;

    default:
      break;
  }

  return (
    <SwiperSlide>
      <div className="project-seven__item">
        <Image
          src={require(`../../assets/images/${image}`).default.src}
          alt=""
        />
        <div className="project-seven__content">
          <Link href={urlPartner}>
            <a className="project-seven__link">
              <i className="flaticon-right-arrow"></i>
            </a>
          </Link>
          <p className="project-seven__category">{category}</p>
          <h3 className="project-seven__title">
            <Link href={urlPartner}>{title}</Link>
          </h3>
        </div>
      </div>
    </SwiperSlide>
  );
};

export default SingleProject;
