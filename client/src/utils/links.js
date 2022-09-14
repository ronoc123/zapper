import { FaHome, FaUserAlt } from "react-icons/fa";
import { ImTicket } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import { BiStoreAlt } from "react-icons/bi";

const links = [
  {
    text: "Home",
    id: 5,
    path: "/",
    icon: <FaHome />,
  },
  {
    text: "Projects",
    id: 4,
    path: "/project",
    icon: <BiStoreAlt />,
  },
  {
    text: "Tickets",
    id: 2,
    path: "/ticket",
    icon: <ImTicket />,
  },
];

export default links;
