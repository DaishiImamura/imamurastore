"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // モバイルメニューが開いているときはスクロールを防ぐ
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""} ${isMenuOpen ? styles.headerActive : ""}`}>
      <div className={styles.container}>
        <div className={styles.logoArea}>
          <Link href="/" className={styles.logo} onClick={closeMenu}>
            <span className={styles.logoIcon}>✦</span>
            <span className={styles.logoText}>IMAMURA STORE</span>
          </Link>
        </div>

        {/* デスクトップ ナビゲーション */}
        <nav className={styles.desktopNav}>
          <ul className={styles.navList}>
            <li>
              <Link href="/about" className={styles.navLink}>
                会社概要
              </Link>
            </li>
            <li>
              <Link href="/services" className={styles.navLink}>
                事業紹介
              </Link>
            </li>
            <li>
              <Link href="/news" className={styles.navLink}>
                お知らせ
              </Link>
            </li>
            <li>
              <Link href="/careers" className={styles.navLink}>
                採用情報
              </Link>
            </li>
          </ul>
        </nav>

        {/* デスクトップ CTA ボタン */}
        <div className={styles.ctaArea}>
          <Link href="/contact" className={styles.ctaButton}>
            お問い合わせ
          </Link>
        </div>

        {/* モバイル ハンバーガーメニューボタン */}
        <button
          className={`${styles.hamburger} ${isMenuOpen ? styles.menuOpen : ""}`}
          onClick={toggleMenu}
          aria-label="メニューを開閉する"
          aria-expanded={isMenuOpen}
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>

        {/* モバイル ナビゲーション ドロワー */}
        <div className={`${styles.mobileDrawer} ${isMenuOpen ? styles.drawerOpen : ""}`}>
          <nav className={styles.mobileNav}>
            <ul className={styles.mobileNavList}>
              <li>
                <Link href="/about" className={styles.mobileNavLink} onClick={closeMenu}>
                  会社概要
                </Link>
              </li>
              <li>
                <Link href="/services" className={styles.mobileNavLink} onClick={closeMenu}>
                  事業紹介
                </Link>
              </li>
              <li>
                <Link href="/news" className={styles.mobileNavLink} onClick={closeMenu}>
                  お知らせ
                </Link>
              </li>
              <li>
                <Link href="/careers" className={styles.mobileNavLink} onClick={closeMenu}>
                  採用情報
                </Link>
              </li>
              <li className={styles.mobileCtaItem}>
                <Link href="/contact" className={styles.mobileCtaButton} onClick={closeMenu}>
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
