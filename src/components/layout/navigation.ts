type NavItem = {
  to: string;
  labelKey: string;
  end?: boolean;
};

export const navItems: NavItem[] = [
  { to: "/", labelKey: "nav.home", end: true },
  { to: "/work", labelKey: "nav.work" },
  { to: "/about", labelKey: "nav.about" },
  { to: "/automation", labelKey: "nav.automation" },
  { to: "/electron", labelKey: "nav.electron" },
  { to: "/contact", labelKey: "nav.contact" },
];
