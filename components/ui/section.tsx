import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { ContentContainer } from "@/components/layout/content-container";
import { cx } from "@/lib/class-names";

const sectionVariants = {
  default: "bg-background",
  surface: "bg-surface",
} as const;

export type SectionVariant = keyof typeof sectionVariants;

type SectionProps = ComponentPropsWithoutRef<"section"> &
  Readonly<{
    contained?: boolean;
    variant?: SectionVariant;
  }>;

type SectionHeaderProps = Readonly<{
  children?: ReactNode;
  className?: string;
  description?: string;
  eyebrow?: string;
  title: string;
}>;

export function Section({
  children,
  className,
  contained = true,
  variant = "default",
  ...props
}: SectionProps) {
  const content = contained ? (
    <ContentContainer>{children}</ContentContainer>
  ) : (
    children
  );

  return (
    <section
      className={cx("py-section", sectionVariants[variant], className)}
      {...props}
    >
      {content}
    </section>
  );
}

export function SectionHeader({
  children,
  className,
  description,
  eyebrow,
  title,
}: SectionHeaderProps) {
  return (
    <div className={cx("grid max-w-3xl gap-4", className)}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="text-display-sm">{title}</h2>
      {description ? (
        <p className="text-body-lg text-muted">{description}</p>
      ) : null}
      {children}
    </div>
  );
}
