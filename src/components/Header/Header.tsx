"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

// SVG アイコンコンポーネント定義
const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
);

const MarketingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
);

const ArchitectureIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 22 1-1h3l9-9"/><path d="M11.5 7.5 15 11"/><path d="M22 2c-1.8 0-3.4 1.3-3.8 3L13.5 10.5M8 18l1.5-1.5"/></svg>
);

const InfoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

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

  return (
    <>
      {/* デスクトップ用トップヘッダー / モバイル用上部ロゴバー */}
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
        <div className={styles.container}>
          <div className={styles.logoArea}>
            <Link href="/" className={styles.logo} onClick={() => setActiveTab("home")}>
              <span className={styles.logoIcon}>✦</span>
              <span className={styles.logoText}>IMAMURA STORE</span>
            </Link>
          </div>

          {/* デスクトップ用ナビゲーション */}
          <nav className={styles.desktopNav}>
            <ul className={styles.navList}>
              <li>
                <Link href="#marketing" className={styles.navLink}>
                  Webマーケティング
                </Link>
              </li>
              <li>
                <Link href="#architecture" className={styles.navLink}>
                  建築設計
                </Link>
              </li>
              <li>
                <Link href="/about" className={styles.navLink}>
                  会社概要
                </Link>
              </li>
            </ul>
          </nav>

          {/* デスクトップ用CTA */}
          <div className={styles.ctaArea}>
            <Link href="/contact" className={styles.ctaButton}>
              お問い合わせ
            </Link>
          </div>

          {/* モバイル上部用お問い合わせアイコン (ショートカット) */}
          <div className={styles.mobileContactBtn}>
            <Link href="/contact" className={`${styles.iconCircle} tappable`} aria-label="お問い合わせ">
              <MailIcon />
            </Link>
          </div>
        </div>
      </header>

      {/* モバイルアプリ風ボトムナビゲーション */}
      <nav className={styles.bottomNav}>
        <ul className={styles.bottomNavList}>
          <li>
            <Link
              href="/"
              className={`${styles.bottomNavItem} ${activeTab === "home" ? styles.activeTab : ""} tappable`}
              onClick={() => setActiveTab("home")}
            >
              <HomeIcon />
              <span className={styles.tabLabel}>ホーム</span>
            </Link>
          </li>
          <li>
            <Link
              href="#marketing"
              className={`${styles.bottomNavItem} ${activeTab === "marketing" ? styles.activeTab : ""} tappable`}
              onClick={() => setActiveTab("marketing")}
            >
              <MarketingIcon />
              <span className={styles.tabLabel}>マーケ</span>
            </Link>
          </li>
          <li>
            <Link
              href="#architecture"
              className={`${styles.bottomNavItem} ${activeTab === "architecture" ? styles.activeTab : ""} tappable`}
              onClick={() => setActiveTab("architecture")}
            >
              <ArchitectureIcon />
              <span className={styles.tabLabel}>建築事業</span>
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`${styles.bottomNavItem} ${activeTab === "about" ? styles.activeTab : ""} tappable`}
              onClick={() => setActiveTab("about")}
            >
              <InfoIcon />
              <span className={styles.tabLabel}>会社情報</span>
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`${styles.bottomNavItem} ${activeTab === "contact" ? styles.activeTab : ""} tappable`}
              onClick={() => setActiveTab("contact")}
            >
              <MailIcon />
              <span className={styles.tabLabel}>連絡先</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
