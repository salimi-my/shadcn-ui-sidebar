"use client";

import { getPages } from "@/lib/pages";
import { usePathname } from "next/navigation";

export function PageTitle() {
  const pathname = usePathname();
  const pages = getPages(pathname);

  const pageTitle = pages.reduce((acc, page) => {
    if (page.active && page.submenus.length > 0) {
      const activeSubmenu = page.submenus.find((submenu) => submenu.active);
      if (activeSubmenu) {
        return activeSubmenu.label;
      }
    } else if (page.active) {
      return page.label;
    }

    return acc;
  }, "");

  return <h1 className="font-bold">{pageTitle}</h1>;
}
