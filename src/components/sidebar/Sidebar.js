import React, { useState } from "react";
import "./Sidebar.scss";
import { HiSwitchHorizontal } from "react-icons/hi";

//import { RiProductHuntLine } from "react-icons/ri";
import menu from "../../data/sidebar";
import SidebarItem from "./SidebarItem";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
   
    <div className="container-fluid">
    <div className="card mt-4  mb-3  bg-warning bg-opacity-50">
   <div className="layout">
      <div className="sidebar" style={{ width: isOpen ? "230px" : "60px" }}>
        <div className="top_section">
          <div className="logo" style={{ display: isOpen ? "block" : "none" }}>
            
          </div>

          <div
            className="bars"
            style={{ marginLeft: isOpen ? "150px" : "0px" }}
          >
            <HiSwitchHorizontal onClick={toggle} />
          </div>
        </div>
        {menu.map((item, index) => {
          return <SidebarItem key={index} item={item} isOpen={isOpen} />;
        })}
      </div>

      <main
        style={{
          paddingLeft: isOpen ? "230px" : "60px",
          transition: "all .5s",
        }}
      >
        {children}
      </main>
    </div>
    </div>
    </div>
  );
};

export default Sidebar;
