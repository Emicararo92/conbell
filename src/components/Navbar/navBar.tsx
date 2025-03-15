"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "../../Styles/navbar.module.css";
import logoBlack from "../../../public/logob.png"; // Logo normal (negro)
import logoWhite from "../../../public/logow.png"; // Logo en hover (blanco)

function NavBar() {
  const [logoSrc, setLogoSrc] = useState(logoBlack);

  return (
    <nav
      className={styles.navbar}
      onMouseEnter={() => setLogoSrc(logoWhite)}
      onMouseLeave={() => setLogoSrc(logoBlack)}
    >
      <div className={styles.navContainer}>
        <a href="#inicio" className={styles.logo}>
          <Image src={logoSrc} alt="Logo" width={80} height={80} priority />
        </a>

        <div className={styles.menu}>
          {/* Dropdown: Showrooms */}
          <div className={styles.menuItem}>
            <a href="/Kitchen" className={styles.menuButton}>
              Showrooms
            </a>
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
