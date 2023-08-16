import React, { useState } from "react";
import "../Style/Navbar.css";
import Mobile from "../Utils/Mobile";

import Web from "../Utils/Web";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="header">
      <div className="logo">
        <img src={require("../assets/logo_2-removebg-preview.png")} alt="" />
      </div>
      

      <div className="menu">
        <div className="web-menu">
          <Web />
        </div>
        <div className="mob-menu">
          <div style={{ color: "white" }} onClick={() => setIsOpen(!isOpen)}>
            {/* <i class="fi fi-rr-apps  menu_Icon"></i> */}
            <i class="fi fi-rr-menu-burger "></i>
          </div>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
