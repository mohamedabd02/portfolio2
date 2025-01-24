import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const links = [
  { id: 1, link: "#", title: "Home" },
  { id: 2, link: "#about", title: "About" },
  { id: 3, link: "#services", title: "Services" },
  { id: 4, link: "#portfolio", title: "Portfolio" },
  { id: 5, link: "#contact", title: "Contact" },
];

export const socials = [
  {
    id: 1,
    link: "https://www.instagram.com/mohamed_abdallah022/",
    icon: <AiOutlineInstagram />,
  },
  {
    id: 2,
    link: "hhttps://www.facebook.com/61556601733732",
    icon: <FaFacebook />,
  },
  { id: 3, link: "https://github.com/mohamedabd02", icon: <FaGithub /> },
  {
    id: 4,
    link: "https://www.linkedin.com/in/mohamed-abdallah-91b45122b/",
    icon: <FaLinkedin />,
  },
];
