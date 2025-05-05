// kbar-util.tsx
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const getActions = (router: AppRouterInstance) => [
  {
    id: "blog",
    name: "Blog",
    shortcut: ["b"],
    keywords: "writing words",
    perform: () => router.push("/blog"),  
  },
  {
    id: "contact",
    name: "Contact",
    shortcut: ["c"],
    keywords: "email",
    perform: () => router.push("/contact"),
  },
  {
    id: "pricing",
    name: "Pricing",
    shortcut: ["p"],
    keywords: "price , money, cost",
    perform: () => router.push("/pricing"),
  },
  {
    id: "home",
    name: "Home",
    shortcut: ["h"],
    keywords: "home, back, page",
    perform: () => router.push("/home"),
  },
];

export default getActions;
