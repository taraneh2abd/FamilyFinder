"use client";

import { useState } from "react";
import ThemeToggle from "@/components/theme/ThemeToggle";
import styles from "./Navbar.module.scss";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>

        {/* LOGO */}
        <a href="/" className={styles.logo}>
          Family<span>Finder</span>
        </a>

        {/* DESKTOP NAV */}
        <nav className={styles.desktopNav}>
          {NAV_LINKS.map(({ label, href }) => (
            <a key={label} href={href} className={styles.navLink}>
              {label}
            </a>
          ))}
        </nav>

        {/* RIGHT CLUSTER */}
        <div className={styles.rightCluster}>
          <a href="/signup" className={styles.ctaBtn}>
            Get Started
          </a>

          <ThemeToggle />

          {/* HAMBURGER */}
          <button
            onClick={() => setOpen((v) => !v)}
            className={`${styles.hamburger} ${open ? styles.isOpen : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {open && (
        <div className={styles.mobileMenu}>
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className={styles.mobileNavLink}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <div className={styles.mobileDivider} />
          <a href="/signup" className={styles.mobileCtaBtn}>
            Get Started
          </a>
        </div>
      )}
    </header>
  );
}
