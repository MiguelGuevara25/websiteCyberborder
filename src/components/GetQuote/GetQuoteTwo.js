import { getQuoteTwo } from "@/data/getQuote";
import { useRouter } from "next/router";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

const {
  title,
  text,
  address,
  email,
  email2,
  email3,
  email4,
  phone,
  phone2,
  phone3,
  phone4,
  inputs,
} = getQuoteTwo;

const GetQuoteTwo = ({ className = "" }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const changeInfoContactEmail = (pathname) => {
    switch (pathname) {
      case "/contacto":
        return <a href={`mailto:${email}`}>{email}</a>;
      case "/contacto-peru":
        return <a href={`mailto:${email2}`}>{email2}</a>;
      case "/contacto-ecuador":
        return <a href={`mailto:${email3}`}>{email3}</a>;
      case "/contacto-paraguay":
        return <a href={`mailto:${email4}`}>{email4}</a>;
    }
  };

  const changeInfoContactPhone = (pathname) => {
    switch (pathname) {
      case "/contacto":
        return <a href={`tel:${phone.split(" ").join("")}`}>{phone}</a>;
      case "/contacto-peru":
        return <a href={`tel:${phone2.split(" ").join("")}`}>{phone2}</a>;
      case "/contacto-ecuador":
        return <a href={`tel:${phone2.split(" ").join("")}`}>{phone3}</a>;
      case "/contacto-paraguay":
        return <a href={`tel:${phone2.split(" ").join("")}`}>{phone4}</a>;
    }
  };

  const { pathname } = useRouter();

  return (
    <section className={`get-quote-two ${className}`}>
      <div className="auto-container">
        <Row className="clearfix">
          <Col lg={6} md={12} sm={12} className="left-col">
            <div className="inner">
              <div className="sec-title">
                <h2 className="text-black">{title}</h2>
              </div>
              <div className="text">{text}</div>
              <div className="info">
                <ul>
                  <li>
                    <span className="icon flaticon-email-2"></span>
                    <strong style={{ color: "#686a6f" }}>Correo</strong>
                    {changeInfoContactEmail(pathname)}
                  </li>
                  <li>
                    <span className="icon flaticon-call"></span>
                    <strong style={{ color: "#686a6f" }}>
                      Número de contacto
                    </strong>
                    {changeInfoContactPhone(pathname)}
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={6} md={12} sm={12} className="right-col">
            <div className="inner">
              <div className="form-box">
                <div className="default-form">
                  <form onSubmit={handleSubmit(onSubmit)} id="contact-form">
                    <Row className="clearfix">
                      {inputs.map(({ name, type, placeholder }) => (
                        <Col
                          key={name}
                          lg={type ? 6 : 12}
                          md={type ? 6 : 12}
                          sm={12}
                          className="form-group"
                        >
                          <div className="field-inner">
                            {type ? (
                              <input
                                type={type}
                                name={name}
                                placeholder={placeholder}
                                {...register(name, { required: true })}
                              />
                            ) : (
                              <textarea
                                name={name}
                                placeholder={placeholder}
                                {...register(name, { required: true })}
                              ></textarea>
                            )}
                            {errors[name] && (
                              <label htmlFor={name} className="error">
                                This Field Is Required.
                              </label>
                            )}
                          </div>
                        </Col>
                      ))}
                      <Col lg={12} md={12} sm={12} className="form-group">
                        <button className="theme-btn btn-style-one">
                          <i className="btn-curve"></i>
                          <span className="btn-title text-white">
                            Enviar Mensaje
                          </span>
                        </button>
                      </Col>
                    </Row>
                  </form>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default GetQuoteTwo;
