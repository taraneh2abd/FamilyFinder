"use client";

import { useState } from "react";
import Link from "next/link";

import ThemeToggle from "@/components/theme/ThemeToggle";
import styles from "./Navbar.module.scss";

const NAV_LINKS = [
  { label: "چت روم ها", href: "/chatrooms" },
  { label: "آگهی ها", href: "/posters" },
  { label: "درباره ما", href: "/aboutus" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>

        {/* LOGO */}
        <Link href="/" className={styles.logo}>
          Family<span>Finder</span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className={styles.desktopNav}>
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className={styles.navLink}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* RIGHT SIDE */}
        <div className={styles.rightCluster}>

          {/* فقط LOGIN */}
          <Link href="/auth/login" className={styles.ctaBtn}>
                        ورود / پروفایل
          </Link>

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

      {/* MOBILE MENU */}
      {open && (
        <div className={styles.mobileMenu}>
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className={styles.mobileNavLink}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}

          <div className={styles.mobileDivider} />

          {/* فقط LOGIN */}
          <Link
            href="/auth/login"
            className={styles.mobileCtaBtn}
            onClick={() => setOpen(false)}
          >
                        ورود / پروفایل
          </Link>
        </div>
      )}
    </header>
  );
}