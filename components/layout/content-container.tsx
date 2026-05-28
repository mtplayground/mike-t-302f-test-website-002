import type { ReactNode } from "react";

type ContentContainerProps = Readonly<{
  children: ReactNode;
  className?: string;
}>;

export function ContentContainer({
  children,
  className,
}: ContentContainerProps) {
  const classNames = ["container", className].filter(Boolean).join(" ");

  return <div className={classNames}>{children}</div>;
}
