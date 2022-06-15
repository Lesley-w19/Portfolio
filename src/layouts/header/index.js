import React, { useState } from "react";

const Header = () => {
  const [active, setActive] = useState("#");
  return (
    <React.Fragment>
      <nav style={{zIndex: "100"}}>
        <div className="nav-head">
          <a
            href="#"
            onClick={() => setActive("#")}
            className={active === "#" ? "active" : ""}
          >
            <i class="bx bx-home-heart"></i>
          </a>
          <a
            href="#about"
            onClick={() => setActive("#about")}
            className={active === "#about" ? "active" : ""}
          >
          <i class='bx bx-user'></i>
          </a>
          <a
            href="#experience"
            onClick={() => setActive("#experience")}
            className={active === "#experience" ? "active" : ""}
          >
           <i class='bx bx-heart'></i>
          </a>
          <a
            href="#resume"
            onClick={() => setActive("#resume")}
            className={active === "#resume" ? "active" : ""}
          >
            <i class="bx bxs-news"></i>
          </a>
          {/* <a
            href="#portfolio"
            onClick={() => setActive("#portfolio")}
            className={active === "#portfolio" ? "active" : ""}
          >
            <i class='bx bx-category-alt'></i>
          </a> */}
          <a
            href="#contact"
            onClick={() => setActive("#contact")}
            className={active === "#contact" ? "active" : ""}
          >
            <i class="bx bx-conversation"></i>
          </a>
        </div>
      </nav>
    </React.Fragment>
  );
};
export default Header;
