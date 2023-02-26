import { FaTh, FaRegChartBar, FaCommentAlt } from "react-icons/fa";
import { GiLovers } from "react-icons/gi";

const menu = [
  {
    title: "Painel",
    icon: <FaTh />,
    path: "/dashboard",
  },
  {
    title: "Adicionar Casais",
    icon: <GiLovers/>,
    path: "/add-product",
  },
  {
    title: "Conta",
    icon: <FaRegChartBar />,
    childrens: [
      {
        title: "Perfil",
        path: "/profile",
      },
      {
        title: "Editar Perfil",
        path: "/edit-profile",
      },
    ],
  },
  {
    title: "Relatar Bug",
    icon: <FaCommentAlt />,
    path: "/contact-us",
  },
];

export default menu;
