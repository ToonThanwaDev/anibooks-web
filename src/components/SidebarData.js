import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text"
  },
  {
    title: "Shop",
    path: "/shop",
    icon: <AiIcons.AiTwotoneShop />,
    cName: "nav-text"
  },
  {
    title: "About Us",
    path: "#",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text"
  }
];
