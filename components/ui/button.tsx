import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { cx } from "@/lib/class-names";

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-md font-bold no-underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-55";

const buttonVariants = {
  ghost:
    "text-foreground hover:bg-surface-raised focus-visible:bg-surface-raised",
  primary: "bg-accent text-accent-contrast shadow-panel hover:bg-accent-strong",
  secondary:
    "border bg-surface text-foreground hover:bg-surface-raised focus-visible:bg-surface-raised",
} as const;

const buttonSizes = {
  sm: "h-9 px-3 text-body-sm",
  md: "h-11 px-5 text-body-sm",
  lg: "h-12 px-6 text-body",
} as const;

export type ButtonVariant = keyof typeof buttonVariants;
export type ButtonSize = keyof typeof buttonSizes;

type ButtonStyleOptions = Readonly<{
  className?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
}>;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonStyleOptions &
  Readonly<{
    children: ReactNode;
  }>;

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  ButtonStyleOptions &
  Readonly<{
    children: ReactNode;
  }>;

export function getButtonClassName({
  className,
  size = "md",
  variant = "primary",
}: ButtonStyleOptions = {}) {
  return cx(buttonBase, buttonVariants[variant], buttonSizes[size], className);
}

export function Button({
  children,
  className,
  size,
  type = "button",
  variant,
  ...props
}: ButtonProps) {
  return (
    <button
      className={getButtonClassName({ className, size, variant })}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  children,
  className,
  size,
  variant,
  ...props
}: ButtonLinkProps) {
  return (
    <a className={getButtonClassName({ className, size, variant })} {...props}>
      {children}
    </a>
  );
}
