import React from "react";
import { Col, Row } from "react-bootstrap";
import ContentSide from "./ContentSide";
import SidebarSide from "./SidebarSide";
import fotoPrueba from "../../assets/images/securitySolutionPhoto.jpg";

const SidebarPageContainer = ({ titleLayout }) => {
  let object = {};

  switch (titleLayout) {
    case "Priime Tech":
      object = {
        title: "Sistema de control de acceso de personas, vehículos y carga.",
        text1:
          "Priime Tech es una empresa de tecnología con experiencia en el desarrollo de soluciones basadas en Sistemas de Inteligencia Artificial, Redes Neuronales, Imágenes por Computadora y Análisis de Imágenes. Sus soluciones buscan la automatización en los procesos de entrada y salida de personas, vehículos y carga en puertos, aeropuertos y pasos de frontera, permitiendo la identificación automática del conductor, matrícula de camiones, remolques y contenedores. El sistema también incluye captura de imágenes fijas y videos para control de fallas.",
        image: fotoPrueba,
        featuredImage: fotoPrueba,
        featuredTitle: "Beneficios de la solución",
        featuredText: "Estos son algunos beneficios de Priime",
        features: [
          "Integración con los sistemas de la empresa.",
          "Uso de Inteligencia Artificial – IA",
          "Control de daños en contenedores",
        ],
        text2:
          "Una empresa de Automatización y Software alineada con la industria 4.0, su solución está enfocada a la eficiencia operativa. Somos una empresa tecnológica con experiencia en el desarrollo de soluciones integradas basadas en Inteligencia Artificial, Redes Neuronales, Visión por Computador y Sistemas de Análisis de Imágenes. Soluciones personalizadas para segmentos que buscan automatización en los procesos de entrada y salida de personas, vehículos y cargas en puertos y aeropuertos, cumpliendo con toda la legislación vigente de los órganos de control. ",
        text3: "",
      };
      break;

    case "VMI Security":
      object = {
        title: "Soluciones inteligentes y ágiles en cualquier lugar.",
        text1:
          "Son dispositivos de Inspección no intrusiva que detecta amenazas automáticamente, permitiendo ver el interior de objetos, personas, vehículos y cargas. Los Scanner más modernos poseen potentes aceleradores lineales que posibilitan alta penetración en acero y una rápida transferencia de datos. Aquellos que implementen algún proceso de digitalización automática de flujo libre, garantizan un tráfico constante de camiones y contenedores por la zona de inspección.",
        image: fotoPrueba,
        featuredImage: fotoPrueba,
        featuredTitle: "Beneficios de la solución",
        featuredText: "Estos son algunos beneficios de VMI Security",
        features: [
          "Mejora de la eficacia de su sistema de inspección",
          "Reducción de costos en mantenimientos correctivos",
          "Precisión en los repuestos",
        ],
        text2:
          "VMI Security es una empresa líder mundial en el desarrollo y fabricación de tecnologías de inspección usando Rayos X. Con soluciones de inspección no intrusiva que aumentan y mejoran los sistemas de control y seguridad, la empresa VMI se destaca por desarrollar equipamientos de alta calidad y su servicio de soporte técnico permanente.",
        text3: "",
      };
      break;

    case "Leghorn Group":
      object = {
        title: "Terminales de contenedores, puertos y aduanas.",
        text1:
          "La experiencia nos muestra que, en estos días, la mercadería más contaminada es aquella que ha sido escaneada, inspeccionada o reconocida como segura. Por ello es preciso asegurar que los contenedores ya escaneados no serán abiertos en las terminales ni serán sacados por error como si fuesen contenedores vacíos. Nuestra solución incorpora la tecnología RFID en los precintos de seguridad que nos brindan garantía de integridad de las mercaderías contenedorizadas. Leghorn es una empresa italiana con más de 40 años fabricando precintos de seguridad. Actualmente la tecnología de Leghorn se encuentra operativa en Europa, India, USA, Latinoamérica, etc. Posee numerosas patentes que lo posicionan como líder mundial de precintos de seguridad RFID.",
        image: fotoPrueba,
        featuredImage: fotoPrueba,
        featuredTitle: "LeghornGroup se ocupa de realizar:",
        featuredText: "Estos son algunos beneficios de Leghorn Group",
        features: [
          "Soluciones que garanticen y protejan la autenticidad del producto.",
          "Sistemas RFID para rastreo de bienes, animales y personas, optimizando flujos operativos industriales y de servicios.",
        ],
        text2:
          "LeghornGroup somos desde 1978 fabricantes y distribuidores de precintos para la seguridad de bienes materiales y personas, especializada en aplicaciones de logística y transporte. Gracias a la gran experiencia y capacidades disponibles en la empresa para el desarrollo de productos y sistemas, también, personalizados. Estamos encantados de proporcionar una respuesta integral y decisiva a cada problema relacionado con la seguridad.",
        text3: "",
      };
      break;

    default:
      break;
  }

  return (
    <div className="sidebar-page-container">
      <div className="auto-container">
        <Row className="clearfix">
          <Col lg={8} md={12} sm={12} className="content-side">
            <ContentSide object={object} />
          </Col>
          <Col lg={4} md={12} sm={12} className="sidebar-side">
            <SidebarSide />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SidebarPageContainer;
