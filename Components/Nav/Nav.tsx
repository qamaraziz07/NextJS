import Link from "next/link";
import React from "react";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <nav className="navbar navbar-light bg-light">
      <Link className={styles["nav-link"]} href="/">
        Navbar
      </Link>
    </nav>
  );
}
export default Nav;
