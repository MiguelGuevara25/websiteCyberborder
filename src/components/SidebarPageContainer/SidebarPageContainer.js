import React from "react";
import { Col, Row } from "react-bootstrap";
import ContentSide from "./ContentSide";
import SidebarSide from "./SidebarSide";
import photoVMI1 from "../../assets/images/portos-vmi.webp";
import fotoPrueba from "../../assets/images/spectrum-cargo-vmi-port-scanners-x-ray-1-1024x451.webp";
import photoPriime1 from "../../assets/images/priime1.jpg";
import photoPriime2 from "../../assets/images/priime2.png";
import photoLeghorn from "../../assets/images/30.webp";
import photoLeghorn1 from "../../assets/images/precintosRFID.png";
import photoGlinlock from "../../assets/images/glinlock1.png";
import photoGlinlock1 from "../../assets/images/glinlock2.jpg";

const SidebarPageContainer = ({ titleLayout }) => {
  let object = {};

  switch (titleLayout) {
    case "Priime Tech":
      object = {
        title: "Sistema de control de acceso de personas, vehículos y carga.",
        text1:
          "Priime Tech es una empresa de tecnología con experiencia en el desarrollo de soluciones basadas en Sistemas de Inteligencia Artificial, Redes Neuronales, Imágenes por Computadora y Análisis de Imágenes. Sus soluciones buscan la automatización en los procesos de entrada y salida de personas, vehículos y carga en puertos, aeropuertos y pasos de frontera, permitiendo la identificación automática del conductor, matrícula de camiones, remolques y contenedores. El sistema también incluye captura de imágenes fijas y videos para control de fallas.",
        image: photoPriime1,
        featuredImage: photoPriime2,
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
        enlace: "https://priimetech.com.br/",
      };
      break;

    case "VMI Security":
      object = {
        title: "Soluciones inteligentes y ágiles en cualquier lugar.",
        text1:
          "Son dispositivos de Inspección no intrusiva que detecta amenazas automáticamente, permitiendo ver el interior de objetos, personas, vehículos y cargas. Los Scanner más modernos poseen potentes aceleradores lineales que posibilitan alta penetración en acero y una rápida transferencia de datos. Aquellos que implementen algún proceso de digitalización automática de flujo libre, garantizan un tráfico constante de camiones y contenedores por la zona de inspección.",
        image: photoVMI1,
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
        enlace: "https://vmisecurity.com/es/",
      };
      break;

    case "Leghorn Group":
      object = {
        title: "Terminales de contenedores, puertos y aduanas.",
        text1:
          "La experiencia nos muestra que, en estos días, la mercadería más contaminada es aquella que ha sido escaneada, inspeccionada o reconocida como segura. Por ello es preciso asegurar que los contenedores ya escaneados no serán abiertos en las terminales ni serán sacados por error como si fuesen contenedores vacíos. Nuestra solución incorpora la tecnología RFID en los precintos de seguridad que nos brindan garantía de integridad de las mercaderías contenedorizadas. Leghorn es una empresa italiana con más de 40 años fabricando precintos de seguridad. Actualmente la tecnología de Leghorn se encuentra operativa en Europa, India, USA, Latinoamérica, etc. Posee numerosas patentes que lo posicionan como líder mundial de precintos de seguridad RFID.",
        image: photoLeghorn,
        featuredImage: photoLeghorn1,
        featuredTitle: "LeghornGroup se ocupa de realizar:",
        featuredText: "Estos son algunos beneficios de Leghorn Group",
        features: [
          "Soluciones que garanticen y protejan la autenticidad del producto.",
          "Sistemas RFID para rastreo de bienes, animales y personas, optimizando flujos operativos industriales y de servicios.",
        ],
        text2:
          "LeghornGroup somos desde 1978 fabricantes y distribuidores de precintos para la seguridad de bienes materiales y personas, especializada en aplicaciones de logística y transporte. Gracias a la gran experiencia y capacidades disponibles en la empresa para el desarrollo de productos y sistemas, también personalizados. Estamos encantados de proporcionar una respuesta integral y decisiva a cada problema relacionado con la seguridad.",
        text3: "",
        enlace: "https://www.leghorngroup.es/",
      };
      break;

    case "Glinlock":
      object = {
        title:
          "Seguimiento de contenedores y cargas para la seguridad en el tránsito",
        text1:
          "Los Precintos Electrónicos GPS son dispositivos de seguridad autónomos y reutilizables, que integran la más avanzada tecnología de detección. Están orientados al mercado de comercio exterior, actividad aduanera y transporte de cargas terrestres, fluvial y marítima. Fueron desarrollados para ser adosados en forma fácil y segura a las puertas de contenedores; también pueden ser utilizados en semi-remolques, camiones acoplados, vagones férreos, silos o depósitos, que cuenten con sistema de barras para cerrar o bloquear la apertura de las puertas.",
        image: photoGlinlock1,
        featuredImage: photoGlinlock,
        featuredTitle: "Características técnicas:",
        featuredText: "Algunas características técnicas de Glinlock",
        features: [
          "Comunicación satelital IRIDIUM",
          "Posee encriptación AES 256",
          "Cobertura telefónica Celular Global 4G / 5G",
        ],
        text2:
          "Permite una respuesta inmediata de las autoridades y los operadores de comercio exterior en caso de accidente, delito o retraso, aportando seguridad a la cadena de suministro global y una reducción de los costes y tiempos operativos.",
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
          <Col lg={9} md={12} sm={12} className="content-side">
            <ContentSide object={object} titleLayout={titleLayout} />
          </Col>
          <Col lg={3} md={12} sm={12} className="sidebar-side">
            <SidebarSide />
          </Col>
        </Row>

        <button className="theme-btn btn-style-one">
          <i className="btn-curve"></i>
          <a
            href={object.enlace}
            target="_blank"
            className="btn-title text-white"
          >
            Más información
          </a>
        </button>
      </div>
    </div>
  );
};

export default SidebarPageContainer;
