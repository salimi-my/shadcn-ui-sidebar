import { LayoutGrid, Users, SquareCheck, UserCog } from "lucide-react";

export function getPages(pathname: string) {
  return [
    {
      href: "/dashboard",
      label: "Dashboard",
      active: pathname.includes("/dashboard"),
      icon: LayoutGrid,
      submenus: []
    },
    {
      href: "",
      label: "Tasks",
      active: pathname.includes("/tasks"),
      icon: SquareCheck,
      submenus: [
        {
          href: "/tasks",
          label: "All Tasks",
          active: pathname === "/tasks"
        },
        {
          href: "/tasks/new",
          label: "New Task",
          active: pathname === "/tasks/new"
        }
      ]
    },
    {
      href: "/users",
      label: "Users",
      active: pathname.includes("/users"),
      icon: Users,
      submenus: []
    },
    {
      href: "/account",
      label: "Account",
      active: pathname.includes("/account"),
      icon: UserCog,
      submenus: []
    }
  ];
}
