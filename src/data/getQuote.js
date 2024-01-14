import counterImage from "@/images/resource/featured-image-10.jpg";
import featuredImage from "@/images/resource/featured-image-9.jpg";

const getQuote = {
  featuredImage,
  featuredTitle: "our Values & Strategy",
  text: "Lorem Ipsum is simply proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem is simply free text quis bibendum.",
  count: 345600,
  counterTitle: "projects was completed successfully",
  counterImage,
  formTitle: "Get a free quote ",
  inputs: [
    {
      name: "username",
      type: "text",
      placeholder: "Your Name",
    },
    {
      name: "email",
      type: "email",
      placeholder: "Email Address",
    },
    {
      name: "phone",
      type: "text",
      placeholder: "Phone Number",
    },
  ],
};

export default getQuote;

export const getQuoteTwo = {
  title: "Estamos siempre para ayudarte",
  text: "Si tienes alguna consulta, no dudes en contactarnos, nuestro equipo de expertos estará encantado de ayudarte.",
  address: "66 Broklyn Street, New York. USA",
  email: "info@cyberboder.com",
  phone: "+1 631 355 9575",
  phone2: "+34 656 94 23 95",
  inputs: [
    {
      type: "text",
      name: "username",
      placeholder: "Nombre",
    },
    {
      type: "email",
      name: "email",
      placeholder: "Correo",
    },
    {
      type: "text",
      name: "phone",
      placeholder: "Teléfono",
    },
    {
      type: "text",
      name: "subject",
      placeholder: "Asunto",
    },
    {
      name: "message",
      placeholder: "Escribe tu mensaje...",
    },
  ],
};

export const getQuoteThree = {
  title: "Still stuck ask directly",
  inputs: [
    {
      type: "text",
      name: "username",
      placeholder: "Nombre",
    },
    {
      type: "email",
      name: "email",
      placeholder: "Correo",
    },
    {
      type: "text",
      name: "phone",
      placeholder: "Teléfono o celular",
    },
    {
      type: "text",
      name: "subject",
      placeholder: "Asunto",
    },
    {
      name: "message",
      placeholder: "Escribe tu mensaje...",
    },
  ],
};
