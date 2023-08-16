import React from "react";
import "../Style/Web.css";
import "../Style/Web.css";

const Web = () => {
  return (
    <div className="web">
      <div className="web_option">
        <a href="#projects">
        <i class="fi fi-rr-document"></i> Projects
        </a>
      </div>
      <div className="web_option">
        <a href="#skills">
        <i class="fi fi-rr-laptop"></i> Skills
        </a>
      </div>
      {/* <div className="web_option">
        <a href="#Work">
          <i class="fi fi-rr-briefcase"></i>Work
        </a>
      </div> */}
      <div className="web_option">
        <a href="#contact">
        <i class="fi fi-rr-following"></i> Contact
        </a>
      </div>
    </div>
  );
};

export default Web;
