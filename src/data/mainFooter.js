import demoBg from "@/images/background/footer-bg-2.jpg";
import logo from "@/images/logoCyberborderVertical.png";

export const footer = { year: new Date().getFullYear(), author: "Cyberborders" };

export const mainFooterDemo = {
  ...footer,
  demoBg,
  title: "Create Stunning Website Now!",
  tagline: "Purchase linoor Template Now",
  templateLink: "#",
};

export const mainFooter = {
  logo,
  bg: demoBg,
  title: "Let’s Start Working Together",
  about:
    "There are many variation of passages of lorem ipsum available, but the majority suffered.",
  about2: "The new corporate agency theme",
  about3:
    "We’ve grown our business on a set of \n three building blocks. Enjoy the \n people you work.",
  text: "Welcome to our web design agency. Lorem ipsum simply free text dolor sited amet cons cing elit.",
  address: "Calle Arica N° 115, Dpto. 604\nMiraflores, Lima - Perú",
  address3: "66 Mark Street, New Town DC 5752, Lo New York",
  address2:
    "214 Gold Street Round Road. 66 \n Code New York, United States \n of America",
  phone: "+1 631 355 9575",
  phone2: "+92 3333 222 000",
  email: "miguel.carrion@cyberborders.com",
  email2: "manuel.hinojosa@cyberborders.com",
  textBottom:
    "Sign up for our latest news & articles. We won’t give you spam mails.",
  subscribeText:
    "Register and get notified about the news & updates before it gets too late.",
  socials: [
    {
      id: 1,
      href: "#",
      icon: "fab fa-facebook-square",
    },
    {
      id: 2,
      href: "#",
      icon: "fab fa-twitter",
    },
    {
      id: 3,
      href: "#",
      icon: "fab fa-instagram",
    },
    {
      id: 4,
      href: "#",
      icon: "fab fa-pinterest-p",
    },
  ],
  links: [
    {
      id: 1,
      href: "/partners/priime",
      title: "Priime",
    },
    {
      id: 2,
      href: "/partners/vmi-security",
      title: "VMI Security",
    },
    {
      id: 3,
      href: "/partners/leghorn-group",
      title: "Leghorn Group",
    },
    {
      id: 4,
      href: "/partners/glinlock",
      title: "Glinlock",
    },
  ],
  ...footer,
  newses: [
    {
      id: 1,
      image: "footer-1-1.png",
      date: "20 Nov, 2020",
      title: "The best digital services for the startups",
    },
    {
      id: 2,
      image: "footer-1-2.png",
      date: "20 Nov, 2020",
      title: "The best digital services for the startups",
    },
  ],
};
