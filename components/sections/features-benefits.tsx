import { BadgeCheck, GitPullRequestArrow, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  Card,
  CardBody,
  CardHeader,
  IconBadge,
  Section,
  SectionHeader,
} from "@/components/ui";
import type { IconBadgeVariant } from "@/components/ui";

type FeatureBenefit = Readonly<{
  description: string;
  icon: LucideIcon;
  iconVariant: IconBadgeVariant;
  title: string;
}>;

const featureBenefits: readonly FeatureBenefit[] = [
  {
    description:
      "Work happens in branches, commits, and pull requests so product decisions stay connected to the code that implements them.",
    icon: GitPullRequestArrow,
    iconVariant: "accent",
    title: "GitHub-native workflow",
  },
  {
    description:
      "Every change is shaped around testability, deployment constraints, and security expectations before it is considered ready.",
    icon: ShieldCheck,
    iconVariant: "coral",
    title: "Production-ready and secure output",
  },
  {
    description:
      "Your team keeps the repository, history, and implementation details, with no platform lock-in between you and your product.",
    icon: BadgeCheck,
    iconVariant: "teal",
    title: "Complete code ownership",
  },
];

export function FeaturesBenefits() {
  return (
    <Section
      id="features"
      contained={false}
      className="features-section"
      aria-labelledby="features-title"
    >
      <SectionHeader
        className="features-header"
        eyebrow="Features and benefits"
        title="Software delivery that stays close to your repo"
        titleId="features-title"
        description="Agent Team works where your product already lives, with implementation choices that keep the output inspectable, secure, and fully yours."
      />

      <div className="features-grid">
        {featureBenefits.map((feature) => (
          <Card key={feature.title} className="features-card">
            <CardHeader>
              <IconBadge
                icon={feature.icon}
                label={feature.title}
                variant={feature.iconVariant}
              />
              <h3 className="features-card-title">{feature.title}</h3>
            </CardHeader>
            <CardBody>{feature.description}</CardBody>
          </Card>
        ))}
      </div>
    </Section>
  );
}
