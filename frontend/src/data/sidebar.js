import { FaTh, FaRegChartBar, FaCommentAlt } from "react-icons/fa";
import { BiImageAdd } from "react-icons/bi";

const menu = [

  {
    title: "Dashboard",
    icon: <FaTh />,
    path: "/dashboard",
  },
  {
    title: "Account",
    icon: <FaRegChartBar />,
    childrens: [
      {
        title: "Profile",
        path: "/profile",
      },
      {
        title: "Edit Profile",
        path: "/edit-profile",
      },
    ],
  },
  // {
  //   title: "Add Member",
  //   icon: <BiImageAdd />,
  //   path: "/add-client",
  // },
  {
    title: "Members",
    icon: <FaRegChartBar />,
    childrens: [
      {
        title: "All Members",
        path: "/dashboard",
      },
      {
        title: "Add Member",

        path: "/add-client",
      },
    ],
  },

  {
    title: "Admin",
    icon: <BiImageAdd />,
    childrens: [
      {
        title: "Medios de Pago",
        path: "/dashboard",
      },
      {
        title: "Cuotas",

        path: "/add-client",
      },
      {
        title: "Roles y Permisos",

        path: "/add-client",
      },
    ],

  },
  {
    title: "Report Bug",
    icon: <FaCommentAlt />,
    path: "/contact-us",
  },
];

export default menu;