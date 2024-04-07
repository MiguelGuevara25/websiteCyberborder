import icon from "@/images/icons/close-1-1.png";
import logo4 from "@/images/logoCyberborderBlanco.png";
import logo1 from "@/images/logoCyberborderBlanco.png";

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
    subNavItems: [
      { id: 1, name: "América", href: "/contacto" },
      { id: 2, name: "Europa", href: "/contacto-2" },
    ],
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
  logo4,
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
