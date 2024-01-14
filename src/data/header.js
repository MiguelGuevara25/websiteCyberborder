import icon from "@/images/icons/close-1-1.png";
import logo4 from "@/images/logoCyberborderNegro.png";
import logo3 from "@/images/logo-3.png";
import logo2 from "@/images/logo-dark.png";
import logo1 from "@/images/logoCyberborderBlanco.png";
import logo6 from "@/images/update-01-10-2021/logo-6-dark.png";
import logo7 from "@/images/update-01-10-2021/logo-7-dark.png";
import logo8 from "@/images/update-01-10-2021/logo-8-light.png";
import logo5 from "@/images/update-09-06-2021/logo-5.png";
import logo10 from "@/images/update-09-06-2021/logo-6.png";
import logo9 from "@/images/update-26-02-2021/logo-horizontal-portfolio.png";

const home = {
  id: 1,
  name: "Inicio",
  href: "/",
};

const navItemsTwo = [
  { ...home, href: "#home" },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Services",
    href: "#services",
  },
  {
    id: 4,
    name: "Portfolio",
    href: "#portfolio",
  },
  {
    id: 5,
    name: "Team",
    href: "#team",
  },
  {
    id: 6,
    name: "Testimonials",
    href: "#testimonials",
  },
  {
    id: 7,
    name: "Blog",
    href: "#blog",
  },
  {
    id: 8,
    name: "Contact",
    href: "#contact",
  },
];

const navItems = [
  home,
  {
    id: 2,
    name: "Priime",
    href: "/partners/priime",
    // subNavItems: [
    //   { id: 1, name: "About Two", href: "/about-2" },
    //   { id: 2, name: "About Me", href: "/about-me" },
    //   { id: 3, name: "Our Mission", href: "/mission" },
    //   { id: 4, name: "Our History", href: "/history" },
    //   {
    //     id: 5,
    //     name: "Our Team",
    //     href: "/team",
    //     subItems: [
    //       { id: 1, name: "Team 01", href: "/team" },
    //       { id: 2, name: "Team 02", href: "/team-2" },
    //       { id: 3, name: "Team 03", href: "/team-3", isNew: true },
    //     ],
    //     isNew: true,
    //   },
    //   { id: 6, name: "Our Process", href: "/process", isNew: true },
    //   { id: 7, name: "Our Partner", href: "/partners", isNew: true },
    // ],
  },
  {
    id: 3,
    name: "VMI Security",
    href: "/partners/vmi-security",
  },
  {
    id: 4,
    name: "Leghorn Group",
    href: "/partners/leghorn-group",
  },
  {
    id: 5,
    name: "Glinlock",
    href: "/partners/glinlock",
  },
  {
    id: 8,
    name: "Contacto",
    href: "/contacto",
  },
];

export const socials = [
  {
    id: 1,
    icon: "fab fa-facebook-square",
    href: "#",
  },
  {
    id: 2,
    icon: "fab fa-twitter",
    href: "#",
  },
  {
    id: 3,
    icon: "fab fa-instagram",
    href: "#",
  },
  {
    id: 4,
    icon: "fab fa-pinterest-p",
    href: "#",
  },
];

const headerData = {
  title: "Linoor - DIgital Agency NextJS Template",
  title2: "Welcome to Creative Buinsess Agency.",
  title3: "Welcome to Amazing Consulting Agency.",
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
  navItems,
  navItemsTwo,
  address: "Suite 20 Golden Street USA",
  phone: "666 888 0000",
  phone2: "+ 92 666 888 0000",
  email: "needhelp@linoor.com",
  icon,
  socials,
  text: "Linoor is a premium Template for Digital Agencies, Start Ups, Small Business and a wide range of other agencies.",
};

export default headerData;
