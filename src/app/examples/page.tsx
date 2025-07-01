import { Metadata } from "next";
import { ArrowLeft, Code2, Palette, Zap } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Examples | shadcn/ui Starter",
  description: "Explore examples and patterns built with shadcn/ui components",
};

export default function ExamplesPage() {
  const examples = [
    {
      title: "Form Validation",
      description: "Complete form with validation using React Hook Form and Zod",
      badge: "React Hook Form",
      icon: <Code2 className="h-5 w-5" />,
      href: "/examples/form-validation"
    },
    {
      title: "Data Tables",
      description: "Advanced data tables with sorting, filtering, and pagination",
      badge: "TanStack Table",
      icon: <Palette className="h-5 w-5" />,
      href: "/examples/data-table"
    },
    {
      title: "Dashboard Layout",
      description: "Complete dashboard layout with sidebar and navigation",
      badge: "Layout",
      icon: <Zap className="h-5 w-5" />,
      href: "/examples/dashboard"
    },
    {
      title: "Authentication",
      description: "Login and signup forms with validation and error handling",
      badge: "Auth",
      icon: <Code2 className="h-5 w-5" />,
      href: "/examples/auth"
    },
    {
      title: "E-commerce Product",
      description: "Product page with image gallery, reviews, and cart functionality",
      badge: "E-commerce",
      icon: <Palette className="h-5 w-5" />,
      href: "/examples/product"
    },
    {
      title: "Settings Panel",
      description: "Comprehensive settings page with tabs and form sections",
      badge: "Settings",
      icon: <Zap className="h-5 w-5" />,
      href: "/examples/settings"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Examples</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Explore real-world examples and patterns built with shadcn/ui components. 
            Each example demonstrates best practices and common use cases.
          </p>
        </div>

        <Separator className="mb-12" />

        {/* Examples Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {examples.map((example, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-200 border-border/50">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    {example.icon}
                  </div>
                  <Badge variant="secondary">{example.badge}</Badge>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {example.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {example.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href={example.href}>
                    View Example
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Coming Soon</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Charts & Analytics", "File Upload", "Calendar Integration", "Email Templates", "API Documentation", "Testing Examples"].map((title, index) => (
              <Card key={index} className="opacity-60">
                <CardHeader>
                  <CardTitle className="text-lg">{title}</CardTitle>
                  <CardDescription>
                    More examples coming soon. Stay tuned!
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button disabled className="w-full">
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}