import { Button } from "@/components/ui/button";

interface SectionHeaderProps {
  title: string;
  actionLabel?: string;
  actionHref?: string;
  icon?: React.ReactNode;
}

export function SectionHeader({
  title,
  actionLabel,
  actionHref = "#",
  icon,
}: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center">
        {icon && <span className="mr-2">{icon}</span>}
        <h2 className="font-medium text-gray-900">{title}</h2>
      </div>
      {actionLabel && (
        <Button
          variant="link"
          className="text-gray-600 hover:text-gray-900 p-0 h-auto"
          asChild
        >
          <a href={actionHref}>{actionLabel}</a>
        </Button>
      )}
    </div>
  );
}
