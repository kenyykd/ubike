import styles from "./header.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.left}>
          <div className={styles.ubikelogo}>
            <img src="/ubikelogo.png" alt="logo" className={styles.logo} />
          </div>
          <ul className={styles.nav}>
            <li>
              <Link href="/instructions">使用說明</Link>
            </li>
            <li>
              <Link href="/pricing">收費方式</Link>
            </li>
            <li className={styles.active}>
              <Link href="/">站點資訊</Link>
            </li>
            <li>
              <Link href="/news">最新消息</Link>
            </li>
            <li>
              <Link href="/activity">活動專區</Link>
            </li>
          </ul>
        </div>
        <div className={styles.right}>
          <Link href="/login" className={styles.loginBtn}>
            登入
          </Link>
          <div
            className={`${styles.hamburger} ${isMenuOpen ? styles.hidden : ""}`}
            onClick={toggleMenu}
          >
            <div className={styles.hamburgerLine}></div>
            <div className={styles.hamburgerLine}></div>
            <div className={styles.hamburgerLine}></div>
          </div>
          {isMenuOpen && (
            <button className={styles.closeButton} onClick={closeMenu}>
              ×
            </button>
          )}
        </div>
      </header>

      <div className={`${styles.sideMenu} ${isMenuOpen ? styles.open : ""}`}>
        <div className={styles.sideMenuHeader}>
          <div className={styles.sideMenuLogo}>
            <img
              src="/Ubikelogo.png"
              alt="logo"
              className={styles.sideMenuLogoImg}
            />
          </div>
          <button className={styles.closeButton} onClick={closeMenu}>
            ×
          </button>
        </div>
        <div className={styles.sideMenuContent}>
          <ul className={styles.sideMenuNav}>
            <li>
              <Link href="/instructions">使用說明</Link>
            </li>
            <li>
              <Link href="/pricing">收費方式</Link>
            </li>
            <li className={styles.active}>
              <Link href="/">站點資訊</Link>
            </li>
            <li>
              <Link href="/news">最新消息</Link>
            </li>
            <li>
              <Link href="/activity">活動專區</Link>
            </li>
          </ul>
          <div className={styles.sideMenuLogin}>
            <button className={styles.sideMenuLoginBtn}>登入</button>
          </div>
        </div>
      </div>
    </>
  );
}
