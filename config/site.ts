export type SiteConfig = typeof siteConfig;

import { app_name } from "@/app/constants";

export const siteConfig = {

  
  name: app_name,
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Docs",
      href: "/docs",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/Aditya-Baindur",
    twitter: "", 
    discord: ""
  },

  kbarActions: [
    {
      id: 'home',
      name: 'Go to Home',
      shortcut: ['g', 'h'],
      keywords: 'home main',
      section: 'Navigation',
      perform: () => window.location.pathname = '/',
    }
  ]
};
