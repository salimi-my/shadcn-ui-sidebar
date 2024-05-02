import { LayoutGrid, Users, SquareCheck, UserCog } from "lucide-react";

export function getPages(pathname: string) {
  return [
    {
      href: "/dashboard",
      label: "Dashboard",
      active: pathname === "/dashboard",
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
      href: "/users?page=1&sort=createdAt.desc",
      label: "Users",
      active: pathname.includes("/users"),
      icon: Users,
      submenus: []
    },
    {
      href: "/account",
      label: "Account",
      active: pathname === "/account",
      icon: UserCog,
      submenus: []
    }
  ];
}
