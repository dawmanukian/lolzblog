import React from "react";
import classes from "./header.module.css";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Header = () => {
  return (
    <header className={classes.header}>
      <h2>TheLolzBlog</h2>
      <Link to={"/"} >
        <FaHome className={classes.icon}/>
        Главная
      </Link>
      <Link to={"/admin"}>Администрирование</Link>
    </header>
  );
};

export default Header;
