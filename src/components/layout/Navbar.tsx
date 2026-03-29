"use client";

import { useState } from "react";
import Link from "next/link";
import HexLogo from "@/components/ui/HexLogo";
import { NAV_ITEMS, COUNTRY_OPTIONS, LANGUAGE_OPTIONS } from "@/constants";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 bg-white"
      style={{ boxShadow: "0 1px 4px rgba(0,0,0,.08)" }}
    >
      {/* ── Main bar ── */}
      <div className="max-w-[1920px] mx-auto px-5 sm:px-10 flex items-center h-14 sm:h-16 relative">

        {/* Logo */}
        <Link href="/" className="shrink-0 mr-auto" aria-label="HLS Global Group Home">
          <HexLogo text="DEMO" />
        </Link>

        {/* Desktop nav — absolutely centered */}
        <nav
          className="hidden lg:flex items-center gap-8 xl:gap-10 absolute left-1/2 -translate-x-1/2"
          aria-label="Main navigation"
        >
          {NAV_ITEMS.map((item) => (
            <Link key={item.label} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-4 ml-auto">
          {/* Search */}
          <button
            aria-label="Search"
            className="text-[#1a1a2e] hover:text-brand-orange transition-colors"
          >
            <SearchIcon />
          </button>

          {/* Country selector */}
          <div className="hidden sm:block">
            <select className="ctrl-select" aria-label="Select country">
              {COUNTRY_OPTIONS.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* Language selector */}
          <div className="hidden sm:block">
            <select className="ctrl-select" aria-label="Select language">
              {LANGUAGE_OPTIONS.map((l) => (
                <option key={l}>{l}</option>
              ))}
            </select>
          </div>

          {/* Mobile hamburger */}
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="lg:hidden text-[#1a1a2e] transition-colors hover:text-brand-orange"
          >
            {menuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>
      </div>

      {/* Tri-color border */}
      <div className="header-border" role="presentation" />

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav
          className="lg:hidden bg-navy px-5 py-4 flex flex-col gap-3"
          aria-label="Mobile navigation"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="nav-link !text-white hover:!text-brand-orange"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <div className="flex gap-6 pt-3 border-t border-white/20">
            <select
              className="ctrl-select !text-white"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%23fff'/%3E%3C/svg%3E")`,
              }}
              aria-label="Select country"
            >
              {COUNTRY_OPTIONS.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>

            <select
              className="ctrl-select !text-white"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%23fff'/%3E%3C/svg%3E")`,
              }}
              aria-label="Select language"
            >
              {LANGUAGE_OPTIONS.map((l) => (
                <option key={l}>{l}</option>
              ))}
            </select>
          </div>
        </nav>
      )}
    </header>
  );
}

/* ── Inline SVG icons ── */
function SearchIcon() {
  return (
    <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}

function HamburgerIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}
