"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { PHONE_DISPLAY, PHONE_HREF, SITE_NAME } from "@/lib/site-data";

const links = [
  { href: "/grease-trap-cleaning", label: "Cleaning" },
  { href: "/grease-trap-cleaning-cost", label: "Pricing" },
  { href: "/restaurant-grease-trap-cleaning", label: "Restaurants" },
  { href: "/emergency-grease-trap-cleaning", label: "Emergency" },
  { href: "/blog", label: "Blog" },
];

export function SiteNavbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="site-header">
        <div className="shell nav-shell">
          <Link href="/" className="brand-mark" onClick={() => setOpen(false)}>
            <span className="brand-badge">FTG</span>
            <span>
              <strong>{SITE_NAME}</strong>
              <small>Grease Trap Cleaning Canada</small>
            </span>
          </Link>

          <nav className="nav-links desktop-only">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="desktop-only header-actions">
            <a href={PHONE_HREF} className="btn btn-primary">
              Call {PHONE_DISPLAY}
            </a>
          </div>

          <button type="button" className="menu-toggle mobile-only" onClick={() => setOpen((value) => !value)}>
            Menu
          </button>
        </div>
      </header>

      <div className={`mobile-drawer ${open ? "open" : ""}`} aria-hidden={!open}>
        <button type="button" className="drawer-backdrop" onClick={() => setOpen(false)} aria-label="Close menu" />
        <div className="drawer-panel">
          <p className="drawer-label">Navigation</p>
          <div className="drawer-links">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
          </div>
          <a href={PHONE_HREF} className="btn btn-primary wide">
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </>
  );
}
