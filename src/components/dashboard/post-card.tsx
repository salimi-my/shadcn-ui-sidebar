import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarIcon, ArrowUpRight, Globe } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface PostCardProps {
  title: string;
  image: string;
  date: string;
  location: string;
  isGlobal?: boolean;
  registrationOpen?: boolean;
  sponsoredBy?: string;
  author?: {
    name: string;
    avatar?: string;
    initials: string;
  };
  tags?: string[];
}

export function PostCard({
  title,
  image,
  date,
  location,
  isGlobal = false,
  registrationOpen = false,
  sponsoredBy,
  author,
  tags = [],
}: PostCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
      <div className="relative h-48 w-full">
        <Image src={image} alt={title} fill className="object-cover" />
        {registrationOpen && (
          <div className="absolute top-3 left-3">
            <Badge className="bg-green-500 text-white hover:bg-green-600">
              Registration open
            </Badge>
          </div>
        )}
      </div>
      <div className="p-4">
        {sponsoredBy && (
          <p className="text-xs text-gray-500 mb-2">Sponsored by</p>
        )}
        <h3 className="font-medium text-gray-900 mb-2 flex items-start">
          <span className="flex-1">{title}</span>
          <ArrowUpRight className="h-4 w-4 text-gray-400 flex-shrink-0 ml-2" />
        </h3>
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <CalendarIcon className="h-4 w-4 mr-2" />
          <span>{date}</span>
        </div>
        <div className="flex items-center text-sm text-gray-500 mb-3">
          {isGlobal ? (
            <Globe className="h-4 w-4 mr-2" />
          ) : (
            <span className="w-4 h-4 mr-2 flex items-center justify-center">
              🌏
            </span>
          )}
          <span>{location}</span>
        </div>
        {author && (
          <div className="flex items-center mt-4">
            <Avatar className="h-6 w-6 mr-2">
              {author.avatar && (
                <AvatarImage src={author.avatar} alt={author.name} />
              )}
              <AvatarFallback>{author.initials}</AvatarFallback>
            </Avatar>
            <span className="text-sm text-gray-600">{author.name}</span>
          </div>
        )}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {tags.map((tag, index) => (
              <Badge
                key={index}
                variant="outline"
                className="bg-gray-100 text-gray-600 hover:bg-gray-100"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
