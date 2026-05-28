export type NavigationItem = Readonly<{
  label: string;
  href: `#${string}`;
}>;

export const navigationItems: readonly NavigationItem[] = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "Value",
    href: "#value",
  },
  {
    label: "How it works",
    href: "#how-it-works",
  },
  {
    label: "Features",
    href: "#features",
  },
  {
    label: "Start",
    href: "#call-to-action",
  },
];
