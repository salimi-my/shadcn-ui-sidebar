import { CalendarIcon, MapPinIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  isVirtual?: boolean;
}

export function EventCard({
  title,
  date,
  time,
  location,
  isVirtual = false,
}: EventCardProps) {
  return (
    <div className="flex flex-col space-y-2">
      <h3 className="font-medium text-gray-900">{title}</h3>
      <div className="flex items-center text-sm text-gray-500">
        <CalendarIcon className="h-4 w-4 mr-2" />
        <span>
          {date}, {time}
        </span>
      </div>
      <div className="flex items-center text-sm text-gray-500">
        <MapPinIcon className="h-4 w-4 mr-2" />
        <span>{location}</span>
        {isVirtual && (
          <Badge
            variant="outline"
            className="ml-2 text-xs bg-gray-100 text-gray-600 hover:bg-gray-100"
          >
            Virtual
          </Badge>
        )}
      </div>
    </div>
  );
}
