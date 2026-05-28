import { Lightbulb, Rocket, ShieldCheck, Workflow } from "lucide-react";
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

type ValueItem = Readonly<{
  description: string;
  icon: LucideIcon;
  iconVariant: IconBadgeVariant;
  title: string;
}>;

const valueItems: readonly ValueItem[] = [
  {
    description:
      "Translate rough founder notes into scoped plans, architecture choices, and implementation tasks an autonomous team can execute.",
    icon: Lightbulb,
    iconVariant: "accent",
    title: "Shape the idea",
  },
  {
    description:
      "Move through code, review, linting, and tests in visible pull requests instead of opaque handoffs or status theater.",
    icon: Workflow,
    iconVariant: "teal",
    title: "Run the delivery loop",
  },
  {
    description:
      "Treat security, reliability, and deployment constraints as acceptance criteria before software is considered ready to ship.",
    icon: ShieldCheck,
    iconVariant: "coral",
    title: "Harden for production",
  },
  {
    description:
      "Keep momentum without hiring a full team first: founders steer priorities while agents handle the implementation path.",
    icon: Rocket,
    iconVariant: "accent",
    title: "Ship at founder pace",
  },
];

export function ValueProposition() {
  return (
    <Section
      id="value"
      contained={false}
      className="value-section"
      aria-labelledby="value-title"
    >
      <SectionHeader
        className="value-header"
        eyebrow="From conversation to shipped software"
        title="Autonomous SDLC that turns intent into production"
        titleId="value-title"
        description="Bring the context, constraints, and decisions. The agent team turns them into software increments that are planned, built, checked, and ready for the real world."
      />

      <div className="value-grid">
        {valueItems.map((item) => (
          <Card key={item.title} className="value-card">
            <CardHeader>
              <IconBadge
                icon={item.icon}
                label={item.title}
                variant={item.iconVariant}
              />
              <h3 className="value-card-title">{item.title}</h3>
            </CardHeader>
            <CardBody>{item.description}</CardBody>
          </Card>
        ))}
      </div>
    </Section>
  );
}
