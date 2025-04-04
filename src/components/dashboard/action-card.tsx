import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlusCircle } from "lucide-react";
import Link from "next/link";

interface ActionCardProps {
  title: string;
  description: string;
  actionLabel?: string;
  href?: string;
  isNew?: boolean;
}

export function ActionCard({
  title,
  description,
  actionLabel = "Add",
  href,
  isNew = false,
}: ActionCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 h-full">
      <div className="flex flex-col h-full justify-between">
        <div>
          <h3 className="font-medium text-lg mb-2 flex items-center gap-2">
            {title}{" "}
            {isNew && (
              <Badge className="bg-blue-500 hover:bg-blue-600">New</Badge>
            )}
          </h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
        <div className="mt-4">
          {href ? (
            <Link href={href}>
              <Button
                variant="outline"
                className="rounded-full bg-white hover:bg-blue-600 hover:text-white border-blue-600 text-blue-600 transition-colors group"
              >
                <PlusCircle className="h-5 w-5 mr-2 text-blue-600 group-hover:text-white transition-colors" />
                {actionLabel}
              </Button>
            </Link>
          ) : (
            <Button
              variant="outline"
              className="rounded-full bg-white hover:bg-blue-600 hover:text-white border-blue-600 text-blue-600 transition-colors group"
            >
              <PlusCircle className="h-5 w-5 mr-2 text-blue-600 group-hover:text-white transition-colors" />
              {actionLabel}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
