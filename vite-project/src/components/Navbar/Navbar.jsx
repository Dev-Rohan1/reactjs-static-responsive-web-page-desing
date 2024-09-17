import { useState } from "react";
import logo from "../../assets/logo.png";
import "./navbar.css";

const Navbar = () => {
  const [resposniveMenu, setResposniveMenu] = useState(true);

  const handelResponsiveMenu = () => {
    setResposniveMenu(() => {
      resposniveMenu ? setResposniveMenu(false) : setResposniveMenu(true);
    });
  };

  return (
    <header>
      <nav>
        <a href="../../../index.html">
          <img src={logo} alt="logo" />
        </a>
        <ul className={resposniveMenu ? "hide_menu" : "show_menu"}>
          <li>
            <a href="#home">Home</a>{" "}
          </li>
          <li>
            <a href="#program">Program</a>
          </li>
          <li>
            <a href="#about_us">About us</a>
          </li>
          <li>
            <a href="#campus">Campus</a>
          </li>
          <li>
            <a href="#testimonial">Testimonials</a>
          </li>
          <li>
            <a href="#contact_us">
              <button>Contact Us</button>
            </a>
          </li>
        </ul>
        <span
          className="material-symbols-outlined resposnive_menu"
          onClick={() => handelResponsiveMenu()}
        >
          {resposniveMenu ? "menu" : "close"}
        </span>
      </nav>
    </header>
  );
};

export default Navbar;
