import { Registry } from "./schema";
import * as fs from "fs";
import * as path from "path";

function getAllFiles(dirPath: string, arrayOfFiles: string[] = []): string[] {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const filePath = path.join(dirPath, file).replaceAll("\\", "/");
    if (fs.statSync(filePath).isDirectory()) {
      arrayOfFiles = getAllFiles(filePath, arrayOfFiles);
    } else {
      arrayOfFiles.push(filePath);
    }
  });

  return arrayOfFiles;
}

const ignoreFolders = ["src/components/ui", "src/components/demo"];

const hooks = getAllFiles("./src/hooks").map((x) => {
  return x.split("src/")[1];
});

const components = getAllFiles("./src/components")
  .filter((x) => !ignoreFolders.some((igf) => x.startsWith(igf)))
  .map((x) => x.split("src/")[1]);

export const ui: Registry = [
  {
    name: "shadcn-sidebar",
    type: "registry:block",
    registryDependencies: [
      "avatar",
      "button",
      "card",
      "collapsible",
      "dropdown-menu",
      "scroll-area",
      "sheet",
      "tooltip"
    ],
    dependencies: ["immer", "zustand", "next-themes"],
    tailwind: {
      config: {
        theme: {
          extend: {
            keyframes: {
              "accordion-down": {
                from: { height: "0" },
                to: { height: "var(--radix-accordion-content-height)" }
              },
              "accordion-up": {
                from: { height: "var(--radix-accordion-content-height)" },
                to: { height: "0" }
              },
              "collapsible-down": {
                from: { height: "0" },
                to: { height: "var(--radix-collapsible-content-height)" }
              },
              "collapsible-up": {
                from: { height: "var(--radix-collapsible-content-height)" },
                to: { height: "0" }
              }
            },
            animation: {
              "accordion-down": "accordion-down 0.2s ease-out",
              "accordion-up": "accordion-up 0.2s ease-out",
              "collapsible-down": "collapsible-down 0.2s ease-out",
              "collapsible-up": "collapsible-up 0.2s ease-out"
            }
          }
        }
      }
    },
    files: [...hooks, ...components, "lib/menu-list.ts"]
  }
];
