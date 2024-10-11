# [shadcn/ui sidebar](https://shadcn-ui-sidebar.salimi.my) &middot; [![Author Salimi](https://img.shields.io/badge/Author-Salimi-%3C%3E)](https://www.salimi.my)

A stunning and functional retractable sidebar for Next.js built on top of [shadcn/ui](https://ui.shadcn.com) complete with desktop and mobile responsiveness.

## Features

- Retractable mini and wide sidebar
- Scrollable sidebar menu
- Sheet menu for mobile
- Grouped menu with labels
- Collapsible submenu
- Extracted menu items list

## Tech/framework used

- Next.js 14
- Shadcn/ui
- Tailwind CSS
- TypeScript
- Zustand

## Installation

### Custom registry

If you are using @shadcn/ui 2.0.0 or later, you can install the component directly from the registry.

```bash
npx shadcn@latest add https://raw.githubusercontent.com/salimi-my/shadcn-ui-sidebar/refs/heads/master/public/registry/shadcn-sidebar.json

or

npx shadcn@latest add https://shadcn-ui-sidebar.salimi.my/registry/shadcn-sidebar.json
```

### Usage example for Nextjs
```tsx
//layout.tsx
import AdminPanelLayout from "@/components/admin-panel/admin-panel-layout";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AdminPanelLayout>{children}</AdminPanelLayout>;
}

//page.tsx
import { ContentLayout } from "@/components/admin-panel/content-layout";

export default function Page() {
  return (
    <ContentLayout title="Test">
      <div>Test</div>
    </ContentLayout>
  );
}
```

## Starting the project locally

1. Clone the repository

   ```bash
   git clone https://github.com/salimi-my/shadcn-ui-sidebar
   ```

2. Install dependencies

   ```bash
   cd shadcn-ui-sidebar
   npm install
   ```

3. Run the development server

   ```bash
   npm run dev
   ```

## Demo

The app is hosted on Vercel. [Click here](https://shadcn-ui-sidebar.salimi.my) to visit.
<br>
Direct demo link: `https://shadcn-ui-sidebar.salimi.my`

## Screenshots

#### Light mode

![Light mode](/screenshots/screenshot-1.png)

#### Dark mode

![Dark mode](/screenshots/screenshot-2.png)

#### Mini sidebar

![Mini sidebar](/screenshots/screenshot-3.png)

#### Sheet menu

<img src="/screenshots/screenshot-4.png" width="300">
