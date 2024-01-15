import dynamic from "next/dynamic";
import React from "react";
import JarallaxImage from "../Jarallax/JarallaxImage";
const Jarallax = dynamic(() => import("../Jarallax/Jarallax"), { ssr: false });

const ParallaxSection = () => {
  return (
    <Jarallax speed={0.3} imgPosition="50% 80%" className="parallax-section">
      <JarallaxImage
        src={require("../../assets/images/integralSecurity.png").default.src}
      />
      <div className="auto-container">
        <div className="content-box">
          <h2>
            SEGURIDAD <span>INTEGRAL</span>
          </h2>
          <p>
            Nuestra Solución provee la{" "}
            <span style={{ fontWeight: "bolder" }}>TRAZABILIDAD</span> necesaria
            para las operaciones portuarias brindando{" "}
            <span style={{ fontWeight: "bolder" }}>INFORMACION ONLINE</span> que
            permite <span style={{ fontWeight: "bolder" }}>AGILIZAR</span> los
            procesos de inspección{" "}
            <span style={{ fontWeight: "bolder" }}>INCREMENTANDO</span> la
            seguridad de la carga
          </p>
        </div>
      </div>
    </Jarallax>
  );
};

export default ParallaxSection;
