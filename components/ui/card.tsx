import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cx } from "@/lib/class-names";

const cardVariants = {
  default: "border bg-surface shadow-panel",
  muted: "border bg-surface-raised",
} as const;

export type CardVariant = keyof typeof cardVariants;

type CardProps = ComponentPropsWithoutRef<"div"> &
  Readonly<{
    variant?: CardVariant;
  }>;

type CardSectionProps = Readonly<{
  children: ReactNode;
  className?: string;
}>;

export function Card({
  children,
  className,
  variant = "default",
  ...props
}: CardProps) {
  return (
    <div
      className={cx("rounded-lg p-6", cardVariants[variant], className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className }: CardSectionProps) {
  return <div className={cx("grid gap-3", className)}>{children}</div>;
}

export function CardBody({ children, className }: CardSectionProps) {
  return (
    <div className={cx("mt-5 text-body text-muted", className)}>{children}</div>
  );
}
