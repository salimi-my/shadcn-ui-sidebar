import { ContentLayout } from "@/components/admin-panel/content-layout";
import { ActionCard } from "@/components/dashboard/action-card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function CompetitiveResearchPage() {
  return (
    <ContentLayout>
      <div className="p-6">
        <div className="flex items-center mb-6">
          <Link href="/dashboard">
            <Button variant="ghost" size="sm" className="mr-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
          </Link>
          <h1 className="text-2xl font-semibold">Competitive Research</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ActionCard
            title="Describe your venture"
            description="Write a description of your venture or idea, and find similar companies, description and value proposition"
            actionLabel="Start"
            href="/competitive-research/describe-venture"
          />
          <ActionCard
            title="Search for a company"
            description="Search for an existing company, and find details on their competition"
            actionLabel="Search"
          />
        </div>
      </div>
    </ContentLayout>
  );
}
