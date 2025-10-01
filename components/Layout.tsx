// src/components/Header.tsx
import React from "react";
import { Link, NavLink } from "react-router-dom";

// Primary: served from public/ (works on GitHub Pages with vite.config base)
const LOGO_PRIMARY = `${import.meta.env.BASE_URL}logo.png`;
// Fallback: GitHub raw URL (replace with your repo if needed)
const LOGO_FALLBACK = "https://raw.githubusercontent.com/logik101/box11/main/logo.png";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={LOGO_PRIMARY}
            alt="AICC Logo"
            className="h-8 w-auto"
            onError={(e) => {
              const img = e.currentTarget as HTMLImageElement;
              if (img.src !== LOGO_FALLBACK) img.src = LOGO_FALLBACK;
            }}
          />
          <span className="font-bold text-lg">AICC</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <NavLink to="/" className={({ isActive }) => (isActive ? "text-primary font-bold" : "text-foreground hover:text-primary")}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "text-primary font-bold" : "text-foreground hover:text-primary")}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "text-primary font-bold" : "text-foreground hover:text-primary")}>
            Contact
          </NavLink>
          <NavLink to="/our-story" className={({ isActive }) => (isActive ? "text-primary font-bold" : "text-foreground hover:text-primary")}>
            Our Story
          </NavLink>
          <NavLink to="/dashboard" className={({ isActive }) => (isActive ? "text-primary font-bold" : "text-foreground hover:text-primary")}>
            Jobseeker
          </NavLink>
          <NavLink to="/employer" className={({ isActive }) => (isActive ? "text-primary font-bold" : "text-foreground hover:text-primary")}>
            Employer
          </NavLink>
          <NavLink to="/caregiver" className={({ isActive }) => (isActive ? "text-primary font-bold" : "text-foreground hover:text-primary")}>
            CareGiver
          </NavLink>
          <NavLink to="/volunteer" className={({ isActive }) => (isActive ? "text-primary font-bold" : "text-foreground hover:text-primary")}>
            Volunteer
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
