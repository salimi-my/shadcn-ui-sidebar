"use client";

import { useState } from "react";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send, AlertCircle, ExternalLink, Info } from "lucide-react";
import { searchSimilarVentures } from "@/lib/api";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

// Define the company result type
interface CompanyResult {
  name: string;
  website: string;
  valueProp: string;
  size: string;
  linkedProfile?: string;
  yearsOfOperation?: string;
}

export default function DescribeVenturePage() {
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");
  const [results, setResults] = useState<CompanyResult[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [apiCallCount, setApiCallCount] = useState(0);
  const [searchesRemaining, setSearchesRemaining] = useState(5);

  const loadingMessages = [
    "Searching the web for similar ventures...",
    "Finding more details about each venture...",
    "Extracting their unique value proposition...",
    "Analyzing company sizes and structures...",
    "Compiling results for you...",
  ];

  const handleSubmit = async () => {
    if (!description.trim()) return;
    if (searchesRemaining <= 0) {
      setError(
        "You have used all your free searches this month. Please upgrade your plan to continue.",
      );
      return;
    }

    setIsLoading(true);
    setResults([]);
    setError(null);
    setApiCallCount((prev) => prev + 1);
    setSearchesRemaining((prev) => prev - 1);

    // Rotate loading messages
    let messageIndex = 0;
    const messageInterval = setInterval(() => {
      setLoadingMessage(loadingMessages[messageIndex]);
      messageIndex = (messageIndex + 1) % loadingMessages.length;
    }, 3000);

    try {
      // Use our local intelligent matching system instead of the API
      const searchResults = await searchSimilarVentures(description);
      setResults(searchResults);
    } catch (err) {
      console.error("Error during search:", err);
      let errorMessage = "An unexpected error occurred";

      if (err instanceof Error) {
        errorMessage = err.message;
      }

      setError(errorMessage);
    } finally {
      clearInterval(messageInterval);
      setIsLoading(false);
    }
  };

  const renderLoadingState = () => (
    <div className="mt-8">
      <div className="flex flex-col items-center justify-center mb-6">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
        <p className="text-gray-600 text-center font-medium">
          {loadingMessage}
        </p>
      </div>

      <h2 className="text-xl font-medium mb-4">Preparing Results</h2>
      <div className="overflow-x-auto">
        <Table className="w-full min-w-[800px]">
          <TableHeader>
            <TableRow>
              <TableHead className="whitespace-nowrap">Company Name</TableHead>
              <TableHead className="whitespace-nowrap">Website Link</TableHead>
              <TableHead className="whitespace-nowrap">
                Unique Value Proposition
              </TableHead>
              <TableHead className="whitespace-nowrap">Size</TableHead>
              <TableHead className="whitespace-nowrap">
                Years of Operation
              </TableHead>
              <TableHead className="whitespace-nowrap">
                Linked Profile
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 5 }).map((_, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Skeleton className="h-5 w-40" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-5 w-52" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-5 w-80" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-5 w-24" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-5 w-24" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-5 w-40" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );

  const renderErrorState = () => (
    <div className="mt-8 p-4 border border-red-200 bg-red-50 rounded-md flex items-start gap-3">
      <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
      <div className="flex-1">
        <h3 className="font-medium text-red-800">Error</h3>
        <p className="text-red-700 text-sm mt-1">{error}</p>
        <div className="mt-3 flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="text-red-700 border-red-300 hover:bg-red-100"
            onClick={() => setError(null)}
          >
            Dismiss
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="text-red-700 border-red-300 hover:bg-red-100"
            onClick={handleSubmit}
          >
            Retry
          </Button>
        </div>
      </div>
    </div>
  );

  const renderResultsTable = () => (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-medium">Research Results</h2>
        <div className="text-sm text-gray-500 flex items-center gap-1">
          <Info className="h-4 w-4" />
          <span>Found {results.length} similar ventures</span>
        </div>
      </div>
      <div className="overflow-x-auto rounded-md border border-gray-200 mb-6">
        <Table className="w-full min-w-[800px]">
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="whitespace-nowrap">Company Name</TableHead>
              <TableHead className="whitespace-nowrap">Website Link</TableHead>
              <TableHead className="whitespace-nowrap">
                Unique Value Proposition
              </TableHead>
              <TableHead className="whitespace-nowrap">Size</TableHead>
              <TableHead className="whitespace-nowrap">
                Years of Operation
              </TableHead>
              <TableHead className="whitespace-nowrap">
                Linked Profile
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {results.map((company, index) => (
              <TableRow
                key={index}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <TableCell className="font-medium">{company.name}</TableCell>
                <TableCell>
                  <a
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline flex items-center gap-1"
                  >
                    {company.website}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </TableCell>
                <TableCell>{company.valueProp}</TableCell>
                <TableCell>{company.size}</TableCell>
                <TableCell>{company.yearsOfOperation || "Unknown"}</TableCell>
                <TableCell>
                  {company.linkedProfile ? (
                    <a
                      href={company.linkedProfile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline flex items-center gap-1"
                    >
                      View Profile
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  ) : (
                    "Not available"
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={() => {
            setResults([]);
            setDescription("");
          }}
        >
          Start New Search
        </Button>
      </div>
    </div>
  );

  return (
    <ContentLayout title="Competitive Research">
      <div className="p-6 max-w-4xl mx-auto">
        <div className="flex items-center mb-6">
          <Button
            variant="outline"
            onClick={() => (window.location.href = "/dashboard")}
            className="mr-2"
          >
            ← Back
          </Button>
          <h1 className="text-2xl font-semibold">Describe Your Venture</h1>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <p className="text-gray-600 mb-4">
            Describe your venture or idea in detail. Our intelligent matching
            system will find similar companies, their descriptions, and value
            propositions based on your description.
          </p>

          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe your venture or idea here..."
            className="min-h-[150px] text-base mb-4"
            disabled={isLoading}
          />

          <div className="flex justify-between items-center h-12">
            <p className="text-sm text-gray-500">
              You have {searchesRemaining} free searches this month
            </p>
            <Button
              onClick={handleSubmit}
              disabled={!description.trim() || isLoading}
              className="flex items-center gap-2 h-12"
            >
              {isLoading ? (
                <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2"></div>
              ) : (
                <Send className="h-4 w-4" />
              )}
              {isLoading ? "Searching..." : "Describe"}
            </Button>
          </div>

          {isLoading && renderLoadingState()}
          {error && renderErrorState()}
          {results.length > 0 && renderResultsTable()}
        </div>
      </div>
    </ContentLayout>
  );
}
