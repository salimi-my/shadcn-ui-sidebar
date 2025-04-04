import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function DashboardHero() {
  return (
    <div className="relative w-full bg-[#0f172a] rounded-lg overflow-hidden h-[350] h-[350] h-96">
      <div className="flex flex-col md:flex-row">
        <div className="p-8 md:p-10 md:w-1/2 text-white z-10">
          <div className="flex items-center mb-4 text-sm">
            <span className="mr-2">Post</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Scale – take your business further with our SC WIN solutions
          </h2>
          <p className="text-sm mb-6">
            SC WIN is Standard Chartered's global initiative to support
            women-led SMEs by providing access to funding, expertise, and a
            network of like- minded entrepreneurs. This initiative is designed
            to help you take your business to the next level.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md">
            Find out more
          </Button>
        </div>
        <div className="md:w-1/2 relative min-h-[300px]">
          <Image
            src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=800&q=80"
            alt="Woman working on business plans"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="absolute bottom-4 right-4 flex space-x-2">
        <Button
          size="icon"
          variant="outline"
          className="bg-white/20 hover:bg-white/30 rounded-full w-8 h-8 p-0"
        >
          <ChevronLeft className="h-4 w-4 text-white" />
        </Button>
        <Button
          size="icon"
          variant="outline"
          className="bg-white/20 hover:bg-white/30 rounded-full w-8 h-8 p-0"
        >
          <ChevronRight className="h-4 w-4 text-white" />
        </Button>
      </div>
    </div>
  );
}
