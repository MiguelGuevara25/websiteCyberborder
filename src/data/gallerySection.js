const items = [
  {
    id: 1,
    image: "7.jpg",
    title: "Fimlor Experience",
    tagline: "Graphic",
  },
  {
    id: 2,
    image: "8.jpg",
    title: "Fimlor Experience",
    tagline: "Graphic",
  },
  {
    id: 3,
    image: "9.jpg",
    title: "Fimlor Experience",
    tagline: "Graphic",
  },
  {
    id: 4,
    image: "10.jpg",
    title: "Fimlor Experience",
    tagline: "Graphic",
  },
  {
    id: 5,
    image: "7.jpg",
    title: "Fimlor Experience",
    tagline: "Graphic",
  },
  {
    id: 6,
    image: "8.jpg",
    title: "Fimlor Experience",
    tagline: "Graphic",
  },

  {
    id: 7,
    image: "9.jpg",
    title: "Fimlor Experience",
    tagline: "Graphic",
  },
  {
    id: 8,
    image: "10.jpg",
    title: "Fimlor Experience",
    tagline: "Graphic",
  },
  {
    id: 9,
    image: "7.jpg",
    title: "Fimlor Experience",
    tagline: "Graphic",
  },
  {
    id: 10,
    image: "8.jpg",
    title: "Fimlor Experience",
    tagline: "Graphic",
  },
  {
    id: 11,
    image: "9.jpg",
    title: "Fimlor Experience",
    tagline: "Graphic",
  },
  {
    id: 12,
    image: "10.jpg",
    title: "Fimlor Experience",
    tagline: "Graphic",
  },
];

const items3 = [
  {
    id: 1,
    image: "1.jpg",
    title: "Fimlor Experience",
    tagline: "Graphic",
  },
  {
    id: 2,
    image: "2.jpg",
    title: "Fimlor Experience",
    tagline: "Graphic",
  },
  {
    id: 3,
    image: "3.jpg",
    title: "Fimlor Experience",
    tagline: "Graphic",
  },
  {
    id: 4,
    image: "4.jpg",
    title: "Fimlor Experience",
    tagline: "Graphic",
  },
  {
    id: 5,
    image: "5.jpg",
    title: "Fimlor Experience",
    tagline: "Graphic",
  },
  {
    id: 6,
    image: "6.jpg",
    title: "Fimlor Experience",
    tagline: "Graphic",
  },

  {
    id: 7,
    image: "1.jpg",
    title: "Fimlor Experience",
    tagline: "Graphic",
  },
  {
    id: 8,
    image: "2.jpg",
    title: "Fimlor Experience",
    tagline: "Graphic",
  },
  {
    id: 9,
    image: "3.jpg",
    title: "Fimlor Experience",
    tagline: "Graphic",
  },
  {
    id: 10,
    image: "4.jpg",
    title: "Fimlor Experience",
    tagline: "Graphic",
  },
  {
    id: 11,
    image: "5.jpg",
    title: "Fimlor Experience",
    tagline: "Graphic",
  },
  {
    id: 12,
    image: "6.jpg",
    title: "Fimlor Experience",
    tagline: "Graphic",
  },
];

const items2 = [
  {
    id: 1,
    image: "1.jpg",
    title: "Fimlor Experience",
    tagline: "Graphic",
    filter: ["all", "web-design"],
  },
  {
    id: 2,
    image: "2.jpg",
    title: "Fimlor Experience",
    tagline: "Graphic",
    filter: ["all", "photography", "web-design"],
  },
  {
    id: 3,
    image: "3.jpg",
    title: "Fimlor Experience",
    tagline: "Graphic",
    filter: ["all", "branding", "web-design"],
  },
  {
    id: 4,
    image: "4.jpg",
    title: "Fimlor Experience",
    tagline: "Graphic",
    filter: ["all", "branding", "illustration"],
  },
  {
    id: 5,
    image: "5.jpg",
    title: "Fimlor Experience",
    tagline: "Graphic",
    filter: ["all", "branding", "illustration", "photography", "web-design"],
  },
  {
    id: 6,
    image: "6.jpg",
    title: "Fimlor Experience",
    tagline: "Graphic",
    filter: ["all", "illustration", "photography"],
  },
];

const gallerySection = {
  title: "Our work showcase",
  tabBtns: [
    {
      id: 1,
      name: "All",
      tab: "p-tab-1",
      count: 6,
    },
    {
      id: 2,
      name: "Branding",
      tab: "p-tab-2",
      count: 8,
    },
    {
      id: 3,
      name: "illustration",
      tab: "p-tab-3",
      count: 7,
    },
    {
      id: 4,
      name: "Photography",
      tab: "p-tab-4",
      count: 10,
    },
    {
      id: 5,
      name: "Web Design",
      tab: "p-tab-5",
      count: 9,
    },
  ],
  pTabs: [
    {
      id: "p-tab-1",
      items,
    },
    {
      id: "p-tab-2",
      items,
    },
    {
      id: "p-tab-3",
      items,
    },
    {
      id: "p-tab-4",
      items,
    },
    {
      id: "p-tab-5",
      items,
    },
  ],
  pTabs2: [
    {
      id: "p-tab-1",
      items: items3,
    },
    {
      id: "p-tab-2",
      items: items3,
    },
    {
      id: "p-tab-3",
      items: items3,
    },
    {
      id: "p-tab-4",
      items: items3,
    },
    {
      id: "p-tab-5",
      items: items3,
    },
  ],
};

export default gallerySection;

export const gallerySectionOne = {
  title: "work showcase",
  tabBtns: [
    {
      id: 1,
      name: "All",
      tab: "all",
    },
    {
      id: 2,
      name: "Branding",
      tab: "branding",
    },
    {
      id: 3,
      name: "illustration",
      tab: "illustration",
    },
    {
      id: 4,
      name: "Photography",
      tab: "photography",
    },
    {
      id: 5,
      name: "Web Design",
      tab: "web-design",
    },
  ],
  items: items2,
};

export const gallerySectionThree = {
  tagline: "Conectividad",
  title: "Nuestra Solución",
  items: [
    {
      id: 1,
      image: "securitySolution.png",
      title: "Seguridad",
      tagline:
        "Es necesaria la aplicación de las más avanzadas tecnologías de Seguridad Electrónica para el CONTROL y TRAZABILIDAD de los envíos, buscando garantizar la integridad de la carga.",
    },
    {
      id: 2,
      image: "conectivityComunication.png",
      title: "Conectividad y comunicación",
      tagline:
        "La conectividad, el análisis en tiempo real y el uso de mecanismos de seguridad sólidos y eficientes son el futuro de las operaciones de comercio internacional.",
    },
    {
      id: 3,
      image: "integrationSystem.png",
      title: "Integración de un sistema único",
      tagline:
        "Nuestra solución integra diferentes tecnologías líderes en el mercado que son completos sistemas de seguridad en sí mismo y altamente eficientes. Estas tecnologías se integran para funcionar como un solo sistema de seguridad que aporta información valiosa y oportuna de control.",
    },
    {
      id: 4,
      image: "operateAgility.png",
      title: "Agilidad operativa",
      tagline:
        "Esta solución permite una respuesta inmediata de las autoridades y los operadores de comercio exterior en casos de contaminación, delitos, accidentes o retrasos, aportando seguridad a la cadena de suministro global y una reducción de costos y tiempos operativos.",
    },
    // {
    //   id: 5,
    //   image: "project-1-5.jpg",
    //   tagline: "Project List",
    //   title: "Substantial Growth",
    // },
    // {
    //   id: 6,
    //   image: "project-1-6.jpg",
    //   tagline: "Project List",
    //   title: "Substantial Growth",
    // },
  ],
};
