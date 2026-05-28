import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui";
import { publicEnv } from "@/lib/env";

export function Hero() {
  return (
    <section id="home" className="hero-section" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">Autonomous SDLC partner</p>
        <h1 id="hero-title">Agent Team for Founders</h1>
        <p className="hero-subhead">You just talk, we handle the rest.</p>
        <p className="hero-tagline">
          Turn product ideas into production-ready, secure software with an
          autonomous team that plans, builds, tests, and ships.
        </p>
        <div id="hero-cta" className="hero-actions">
          <ButtonLink href={publicEnv.ctaUrl} size="lg">
            Start building
            <ArrowRight aria-hidden="true" size={18} strokeWidth={2.3} />
          </ButtonLink>
        </div>
      </div>

      <div className="hero-media" aria-hidden="true">
        <Image
          src="/images/hero-agent-team.png"
          alt=""
          width={1799}
          height={874}
          priority
          sizes="(min-width: 1024px) 48vw, 100vw"
        />
      </div>
    </section>
  );
}
