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
    label: "Setup",
    href: "#setup",
  },
];
