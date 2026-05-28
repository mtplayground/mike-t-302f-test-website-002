import type { LucideIcon } from "lucide-react";
import { cx } from "@/lib/class-names";

const iconBadgeVariants = {
  accent: "bg-accent-soft text-accent-strong",
  coral: "bg-support-coral/10 text-support-coral",
  teal: "bg-support-teal/10 text-support-teal",
} as const;

export type IconBadgeVariant = keyof typeof iconBadgeVariants;

type IconBadgeProps = Readonly<{
  className?: string;
  icon: LucideIcon;
  label: string;
  variant?: IconBadgeVariant;
}>;

export function IconBadge({
  className,
  icon: Icon,
  label,
  variant = "accent",
}: IconBadgeProps) {
  return (
    <span
      className={cx(
        "inline-grid h-11 w-11 place-items-center rounded-md",
        iconBadgeVariants[variant],
        className,
      )}
    >
      <Icon aria-hidden="true" size={22} strokeWidth={2.2} />
      <span className="sr-only">{label}</span>
    </span>
  );
}
