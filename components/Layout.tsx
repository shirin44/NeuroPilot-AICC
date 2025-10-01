// src/components/Layout.tsx
import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import FloatingCalmButton from "./FloatingCalmButton";
import { AppContext } from "../App";
import { NarratorRole } from "../types";
import NarratorAvatar from "./NarratorAvatar";
import Breadcrumbs from "./Breadcrumbs";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { narratorRole } = useContext(AppContext);
  const location = useLocation();

  const hideNarratorPages = ["/", "/about", "/contact"];
  const shouldShowNarrator =
    !!narratorRole && !hideNarratorPages.includes(location.pathname);

  const isHomePage = location.pathname === "/";
  const showCalmButtonForJobseeker =
    shouldShowNarrator && narratorRole === NarratorRole.Jobseeker;

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />

      {/* Only show breadcrumbs when not on home */}
      {!isHomePage && <Breadcrumbs />}

      <main
        className={`flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative ${
          isHomePage ? "" : "py-8"
        }`}
      >
        <div className={shouldShowNarrator ? "pb-40" : ""}>
          {/* Content */}
          {children}
        </div>

        {/* Floating narrator avatar */}
        {shouldShowNarrator && <NarratorAvatar />}

        {/* Floating calm button on home or Jobseeker mode */}
        {(isHomePage || showCalmButtonForJobseeker) && <FloatingCalmButton />}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
