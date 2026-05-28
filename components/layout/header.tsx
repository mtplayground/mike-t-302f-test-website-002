"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ContentContainer } from "@/components/layout/content-container";
import { navigationItems } from "@/lib/navigation";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((isOpen) => !isOpen);

  return (
    <header className="site-header">
      <ContentContainer className="site-header-inner">
        <a href="#home" className="site-wordmark" aria-label="Agent Team home">
          <span className="site-wordmark-mark" aria-hidden="true">
            AT
          </span>
          <span>Agent Team</span>
        </a>

        <nav className="site-nav" aria-label="Primary navigation">
          {navigationItems.map((item) => (
            <a key={item.href} href={item.href} className="site-nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="site-menu-button"
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X aria-hidden="true" size={20} strokeWidth={2.2} />
          ) : (
            <Menu aria-hidden="true" size={20} strokeWidth={2.2} />
          )}
        </button>
      </ContentContainer>

      {isMenuOpen ? (
        <div id="mobile-navigation" className="site-mobile-nav">
          <ContentContainer>
            <nav
              aria-label="Mobile navigation"
              className="site-mobile-nav-list"
            >
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="site-mobile-nav-link"
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </ContentContainer>
        </div>
      ) : null}
    </header>
  );
}
