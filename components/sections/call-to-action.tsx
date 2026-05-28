import { ArrowRight } from "lucide-react";
import { ButtonLink, Section } from "@/components/ui";
import { publicEnv } from "@/lib/env";

export function CallToAction() {
  return (
    <Section
      id="call-to-action"
      contained={false}
      className="cta-section"
      variant="inverse"
      aria-labelledby="cta-title"
    >
      <div className="cta-content">
        <div className="cta-copy">
          <p className="cta-eyebrow">Ready when you are</p>
          <h2 id="cta-title" className="cta-title">
            You just talk, we handle the rest.
          </h2>
          <p className="cta-description">
            Turn product intent into production-ready, secure software with an
            autonomous delivery loop built for founder-led teams.
          </p>
        </div>

        <div className="cta-actions">
          <ButtonLink href={publicEnv.ctaUrl} size="lg" className="cta-button">
            Start building
            <ArrowRight aria-hidden="true" size={18} strokeWidth={2.3} />
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
