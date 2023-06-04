import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.svg";
import menu from "../Images/icon-menu.svg";
import close from "../Images/icon-menu-close.svg";
import classes from "./NavBar.module.css";

const NavBar = () => {
  const [hidMenu, setHideMenu] = useState(false);
  return (
    <div className={classes.nav}>
      <img src={logo} alt="" />
      <div className={classes.links}>
        <div>
          <Link to="/">Home</Link>
        </div>
      </div>
      <div className={classes["open-menu"]}>
        <img
          onClick={() => {
            setHideMenu(true);
          }}
          src={menu}
          alt=""
        />
      </div>
      {hidMenu && (
        <div className={classes.menu}>
          <div className={classes["menu-content"]}>
            <div className={classes["close-icon"]}>
              <img
                onClick={() => {
                  setHideMenu(false);
                }}
                src={close}
                alt=""
              />
            </div>
            <div className={classes["menu-links"]}>
              <Link to="/">Home</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
