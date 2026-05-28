import { Activity, ClipboardList, Code2, Rocket } from "lucide-react";
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

type HowItWorksStep = Readonly<{
  description: string;
  icon: LucideIcon;
  iconVariant: IconBadgeVariant;
  label: string;
}>;

const steps: readonly HowItWorksStep[] = [
  {
    description:
      "Shape the product goal, constraints, and delivery path into an actionable implementation plan.",
    icon: ClipboardList,
    iconVariant: "accent",
    label: "Plan",
  },
  {
    description:
      "Turn the plan into reviewed code with typed components, focused tests, and clear pull requests.",
    icon: Code2,
    iconVariant: "teal",
    label: "Build",
  },
  {
    description:
      "Package and verify the release so the static site is ready for production hosting.",
    icon: Rocket,
    iconVariant: "coral",
    label: "Deploy",
  },
  {
    description:
      "Monitor feedback, keep the backlog current, and iterate as priorities change.",
    icon: Activity,
    iconVariant: "accent",
    label: "Operate",
  },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works" contained={false} className="how-section">
      <SectionHeader
        className="how-header"
        eyebrow="How it works"
        title="A delivery loop built for founder momentum"
        description="Move from rough direction to shipped software through a repeatable workflow that keeps every step visible."
      />

      <ol className="how-steps" aria-label="How Agent Team works">
        {steps.map((step, index) => (
          <li key={step.label} className="how-step">
            <Card className="how-card">
              <CardHeader className="how-card-header">
                <div className="how-step-marker" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <IconBadge
                  icon={step.icon}
                  label={`${step.label} step`}
                  variant={step.iconVariant}
                />
                <h3 className="how-step-title">{step.label}</h3>
              </CardHeader>
              <CardBody className="how-step-description">
                {step.description}
              </CardBody>
            </Card>
          </li>
        ))}
      </ol>
    </Section>
  );
}
