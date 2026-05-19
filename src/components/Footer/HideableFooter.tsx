"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/Footer/Footer";

export default function HideableFooter() {
  const pathname = usePathname();

  const isAuthPage =
    pathname.startsWith("/auth") ||
    pathname.startsWith("/login") ||
    pathname.startsWith("/register");

  if (isAuthPage) return null;

  return <Footer />;
}