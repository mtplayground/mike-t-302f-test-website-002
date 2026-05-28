import { ContentContainer } from "@/components/layout/content-container";
import { publicEnv } from "@/lib/env";
import { navigationItems } from "@/lib/navigation";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="site-footer">
      <ContentContainer className="site-footer-inner">
        <div className="site-footer-brand">
          <a
            href="#home"
            className="site-wordmark"
            aria-label="Agent Team home"
          >
            <span className="site-wordmark-mark" aria-hidden="true">
              AT
            </span>
            <span>Agent Team</span>
          </a>
          <p className="site-footer-text">
            Autonomous software support for founder-led teams.
          </p>
        </div>

        <nav className="site-footer-links" aria-label="Footer navigation">
          {navigationItems.map((item) => (
            <a key={item.href} href={item.href} className="site-footer-link">
              {item.label}
            </a>
          ))}
          <a href={publicEnv.ctaUrl} className="site-footer-link">
            Start
          </a>
        </nav>

        <p className="site-footer-copy">
          &copy; {currentYear} Agent Team. All rights reserved.
        </p>
      </ContentContainer>
    </footer>
  );
}
