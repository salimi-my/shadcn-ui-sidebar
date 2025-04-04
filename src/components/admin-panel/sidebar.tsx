"use client";
import { Menu } from "@/components/admin-panel/menu";
import { SidebarToggle } from "@/components/admin-panel/sidebar-toggle";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";
import { cn } from "@/lib/utils";
import { Home, RefreshCw, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Sidebar() {
  const sidebar = useStore(useSidebar, (x) => x);
  if (!sidebar) return null;
  const { isOpen, toggleOpen, getOpenState, setIsHover, settings } = sidebar;
  return (
    <aside
      className={cn(
        "fixed top-0 left-0 z-20 h-screen -translate-x-full lg:translate-x-0 transition-[width] ease-in-out duration-300 bg-white",
        !getOpenState() ? "w-[90px]" : "w-72",
        settings.disabled && "hidden",
      )}
    >
      <SidebarToggle isOpen={isOpen} setIsOpen={toggleOpen} />
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="relative h-full flex flex-col px-3 py-4 overflow-y-auto shadow-md border-r border-gray-200"
      >
        <div className="flex items-center justify-center mb-6 h-10">
          <img
            src="https://scventures.io/fintechbridge/logo-full.svg"
            alt="SC Ventures by Standard Chartered"
            className="h-full object-contain"
          />
        </div>

        <div className="space-y-1">
          <Button
            variant="ghost"
            className={cn(
              "w-full justify-start",
              !getOpenState() ? "px-3" : "px-4",
            )}
            asChild
          >
            <Link href="/dashboard" className="flex items-center">
              <Home className="h-5 w-5 mr-3 text-gray-500" />
              <span
                className={cn(
                  "transition-opacity ease-in-out duration-300",
                  !getOpenState() ? "opacity-0" : "opacity-100",
                )}
              >
                Bridge
              </span>
            </Link>
          </Button>

          <Button
            variant="ghost"
            className={cn(
              "w-full justify-start",
              !getOpenState() ? "px-3" : "px-4",
            )}
          >
            <RefreshCw className="h-5 w-5 mr-3 text-gray-500" />
            <span
              className={cn(
                "transition-opacity ease-in-out duration-300",
                !getOpenState() ? "opacity-0" : "opacity-100",
              )}
            >
              SCWIN
            </span>
          </Button>

          <Button
            variant="ghost"
            className={cn(
              "w-full justify-start",
              !getOpenState() ? "px-3" : "px-4",
            )}
          >
            <Sparkles className="h-5 w-5 mr-3 text-gray-500" />
            <span
              className={cn(
                "transition-opacity ease-in-out duration-300",
                !getOpenState() ? "opacity-0" : "opacity-100",
              )}
            >
              Spark Innovation
            </span>
          </Button>
        </div>

        <Menu isOpen={getOpenState()} />
      </div>
    </aside>
  );
}
