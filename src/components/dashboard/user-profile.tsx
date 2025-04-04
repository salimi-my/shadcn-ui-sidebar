import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface UserProfileProps {
  name: string;
  role: string;
  title: string;
  avatar?: string;
  initials: string;
}

export function UserProfile({
  name,
  role,
  title,
  avatar,
  initials,
}: UserProfileProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 sticky top-0 z-10">
      <div className="flex flex-col items-center text-center">
        <Avatar className="h-16 w-16 mb-4">
          {avatar && <AvatarImage src={avatar} alt={name} />}
          <AvatarFallback className="text-lg bg-blue-500 text-white">
            {initials}
          </AvatarFallback>
        </Avatar>
        <h3 className="font-medium text-lg">{name}</h3>
        <p className="text-gray-500 text-sm mb-1">{role}</p>
        <p className="text-gray-500 text-sm mb-4">{title}</p>
        <Button
          variant="outline"
          className="w-full justify-center rounded-md border-gray-300 text-gray-700 hover:bg-gray-50"
        >
          My space
        </Button>
      </div>
    </div>
  );
}
