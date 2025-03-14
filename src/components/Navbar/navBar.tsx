"use client";

import Image from "next/image";
import styles from "../../Styles/navbar.module.css";
import logo from "../../../public/logo.png";

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <a href={"/"} className={styles.logo}>
          <Image
            className="bg-black p-1 rounded-b-sm"
            src={logo}
            alt="logo"
            width={80}
            height={80}
          />
        </a>

        <div className={styles.menu}>
          {/* Dropdown: Showrooms */}
          <div className={styles.menuItem}>
            <a href="#showrooms" className={styles.menuButton}>
              Showrooms
            </a>
            <div className={styles.dropdown}>
              <a href="#cocinas" className={styles.dropdownItem}>
                Cocinas
              </a>
              <a href="#placards" className={styles.dropdownItem}>
                Placards
              </a>
            </div>
          </div>

          {/* Dropdown: Nosotros */}
          <div className={styles.menuItem}>
            <a href="#nosotros" className={styles.menuButton}>
              Nosotros
            </a>
            <div className={styles.dropdown}>
              <a href="#nuestra-historia" className={styles.dropdownItem}>
                Nuestra Historia
              </a>
              <a href="#vendedores" className={styles.dropdownItem}>
                Vendedores
              </a>
              <a href="#fabrica" className={styles.dropdownItem}>
                Fabrica
              </a>
            </div>
          </div>

          {/* Dropdown: Contacto */}
          <div className={styles.menuItem}>
            <a href="#contacto" className={styles.menuButton}>
              Contacto
            </a>
            <div className={styles.dropdown}>
              <a href="#contact-form" className={styles.dropdownItem}>
                Te llamamos?
              </a>
              <a href="#como-llegar" className={styles.dropdownItem}>
                Como llegar?
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
