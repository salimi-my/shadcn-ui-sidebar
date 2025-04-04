"use client";
import Link from "next/link";
import Image from "next/image";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";
import { DashboardHero } from "@/components/dashboard/dashboard-hero";
import { ActionCard } from "@/components/dashboard/action-card";
import { EventCard } from "@/components/dashboard/event-card";
import { PostCard } from "@/components/dashboard/post-card";
import { UserProfile } from "@/components/dashboard/user-profile";
import { SectionHeader } from "@/components/dashboard/section-header";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import React from "react";
import { CalendarDays, Filter } from "lucide-react";

export default function DashboardPage() {
  const sidebar = useStore(useSidebar, (x) => x);
  if (!sidebar) return null;

  return (
    <ContentLayout title="Bridge">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
        {/* Main content - 2/3 width */}
        <div className="lg:col-span-2 space-y-6">
          {/* Hero section */}
          <DashboardHero className="h-[800]" />

          {/* Action cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ActionCard
              title="Write a newsfeed or article"
              description="Write and share an post, newsfeed or article."
              actionLabel="Write"
            />
            <ActionCard
              title="Create your pitch"
              description="Pitch your solution and connect with potential investors, partners and mentors who can bring your vision to life"
              actionLabel="Create"
            />
            <ActionCard
              title="Smart research"
              description="Analyze competitors and market trends to identify opportunities and threats"
              actionLabel="Research"
              href="/competitive-research"
              isNew={true}
            />
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-200">
            <Button
              variant="link"
              className="text-gray-900 border-b-2 border-gray-900 rounded-none px-4 py-2"
            >
              Open challenges
            </Button>
            <Button
              variant="link"
              className="text-gray-500 rounded-none px-4 py-2"
            >
              Posts & events
            </Button>
            <Button
              variant="link"
              className="text-gray-500 rounded-none px-4 py-2"
            >
              Pitches
            </Button>
            <div className="ml-auto">
              <Button variant="outline" size="sm" className="rounded-md">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>

          {/* Posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PostCard
              title="Standard Chartered SC WIN Now and Next Challenge 2025"
              image="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=800&q=80"
              date="24th Apr 2025, 23:59"
              location="Asia"
              registrationOpen={true}
              sponsoredBy="Standard Chartered"
            />
            <PostCard
              title="Looking for Proposals for Audio Marketing Services"
              image="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&q=80"
              date="30th Apr 2025, 23:59"
              location="Global"
              isGlobal={true}
              registrationOpen={true}
              sponsoredBy="Audio Marketing Agency"
            />
          </div>
        </div>

        {/* Sidebar - 1/3 width - fixed to right */}
        <div className="space-y-6 lg:fixed lg:right-0 lg:w-[25%] lg:top-[5.5rem] lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto lg:pr-6 bg-white">
          {/* User profile */}
          <UserProfile
            name="Allan Oxenham"
            role="External user"
            title="Title: Executive"
            initials="AO"
          />

          {/* Upcoming events */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <SectionHeader
              title="Upcoming events"
              actionLabel="See all events"
              icon={<CalendarDays className="h-5 w-5 text-gray-500" />}
            />
            <div className="space-y-6">
              <EventCard
                title="Webinar on SC WIN Now & Next Challenge: Your Path to Scale & Global Growth"
                date="26th Mar 25"
                time="10:00 GMT+8:00"
                location="Virtual"
                isVirtual={true}
              />
            </div>
          </div>

          {/* Featured posts */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <SectionHeader title="Featured posts" actionLabel="See all posts" />
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-gray-900 mb-2">
                  Scale – take your business further with our SC WIN solutions
                </h3>
                <div className="flex flex-wrap gap-2 mb-2">
                  <Button
                    variant="outline"
                    className="text-xs py-0 h-6 rounded-full bg-gray-100 border-gray-200 text-gray-700 hover:bg-gray-200"
                  >
                    Entrepreneurship
                  </Button>
                  <Button
                    variant="outline"
                    className="text-xs py-0 h-6 rounded-full bg-gray-100 border-gray-200 text-gray-700 hover:bg-gray-200"
                  >
                    Women Entrepreneurship
                  </Button>
                </div>
                <div className="flex items-center">
                  <Avatar className="h-6 w-6 mr-2">
                    <AvatarFallback>SD</AvatarFallback>
                  </Avatar>
                  <span className="text-sm text-gray-600">Susan De</span>
                </div>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 mb-2">
                  Connect – build a global network of partners and experts
                  across borders
                </h3>
                <div className="flex flex-wrap gap-2 mb-2">
                  <Button
                    variant="outline"
                    className="text-xs py-0 h-6 rounded-full bg-gray-100 border-gray-200 text-gray-700 hover:bg-gray-200"
                  >
                    Women Entrepreneurship
                  </Button>
                  <Button
                    variant="outline"
                    className="text-xs py-0 h-6 rounded-full bg-gray-100 border-gray-200 text-gray-700 hover:bg-gray-200"
                  >
                    Entrepreneurship
                  </Button>
                </div>
                <div className="flex items-center">
                  <Avatar className="h-6 w-6 mr-2">
                    <AvatarFallback>SD</AvatarFallback>
                  </Avatar>
                  <span className="text-sm text-gray-600">Susan De</span>
                </div>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 mb-2">
                  Belong – join a community of female entrepreneurs to connect
                  to your next client, supplier, partner or investor
                </h3>
                <div className="flex flex-wrap gap-2 mb-2">
                  <Button
                    variant="outline"
                    className="text-xs py-0 h-6 rounded-full bg-gray-100 border-gray-200 text-gray-700 hover:bg-gray-200"
                  >
                    Entrepreneurship
                  </Button>
                  <Button
                    variant="outline"
                    className="text-xs py-0 h-6 rounded-full bg-gray-100 border-gray-200 text-gray-700 hover:bg-gray-200"
                  >
                    Women Entrepreneurship
                  </Button>
                </div>
                <div className="flex items-center">
                  <Avatar className="h-6 w-6 mr-2">
                    <AvatarFallback>SD</AvatarFallback>
                  </Avatar>
                  <span className="text-sm text-gray-600">Susan De</span>
                </div>
              </div>
            </div>
          </div>

          {/* Featured challenges */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <SectionHeader
              title="Featured challenges"
              actionLabel="See all challenges"
            />
            <div>
              <h3 className="font-medium text-gray-900 mb-3">
                How can we build a unified, holistic and aggregated view of
                Non-Financial Risk and its interconnectedness such that it will
                enable prioritised, proactive and predictive risk management,
                driving better client focused and risk aware outcomes?
              </h3>
            </div>
          </div>
        </div>
      </div>
    </ContentLayout>
  );
}
