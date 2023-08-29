import React from "react";
import { Link } from "react-router-dom";
import style from "./nav.module.scss";
const NavHeader = () => {
  return (
    <nav className={style.main_navbar}>
      <Link to="/">verdensmålene</Link>
      <Link to="/udfordringer">udfordringer</Link>
      <Link to="/delmålene">delmålene</Link>¨
      <Link to="/kontakt">kontakt</Link>
    </nav>
  );
};

export default NavHeader;
