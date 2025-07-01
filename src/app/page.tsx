"use client";

import { useState } from "react";
import { 
  ChevronRight, 
  Github, 
  Star, 
  Zap, 
  Palette, 
  Code, 
  Rocket,
  Heart,
  ExternalLink
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

export default function Home() {
  const [sliderValue, setSliderValue] = useState([50]);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);

  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Lightning Fast",
      description: "Built with Next.js 15 and Turbopack for blazing fast development and performance."
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Beautiful UI",
      description: "Stunning components built with Radix UI and styled with Tailwind CSS."
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Developer Experience",
      description: "TypeScript, ESLint, and modern tooling for the best developer experience."
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Production Ready",
      description: "Optimized for production with best practices and performance in mind."
    }
  ];

  const components = [
    "Button", "Card", "Dialog", "Input", "Label", "Select", "Switch", 
    "Tabs", "Slider", "Badge", "Separator", "Sheet", "Radio Group"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Zap className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="font-bold text-xl">shadcn starter</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button size="sm">
                Get Started
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              <Star className="h-3 w-3 mr-1" />
              Next.js 15 + shadcn/ui
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Build faster with{" "}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                shadcn/ui
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              A modern starter template featuring Next.js 15, shadcn/ui components, 
              Tailwind CSS, and TypeScript. Everything you need to build beautiful, 
              accessible, and performant web applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <a href="/examples">
                  View Examples
                  <ChevronRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8" asChild>
                <a href="https://ui.shadcn.com" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  shadcn/ui Docs
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why choose this starter?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Built with modern tools and best practices to help you ship faster
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Interactive Component Demo</h2>
            <p className="text-muted-foreground text-lg">
              Try out some of the included shadcn/ui components
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="components" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="components">Components</TabsTrigger>
                <TabsTrigger value="forms">Forms</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>

              <TabsContent value="components" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Available Components</CardTitle>
                    <CardDescription>
                      Pre-built shadcn/ui components ready to use in your project
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {components.map((component) => (
                        <Badge key={component} variant="secondary">
                          {component}
                        </Badge>
                      ))}
                    </div>
                    <Separator className="my-6" />
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button>Primary Button</Button>
                      <Button variant="secondary">Secondary</Button>
                      <Button variant="outline">Outline</Button>
                      <Button variant="ghost">Ghost</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="forms" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Form Components</CardTitle>
                    <CardDescription>
                      Beautiful, accessible form components with validation
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Enter your email" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="select-demo">Framework</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a framework" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="next">Next.js</SelectItem>
                            <SelectItem value="react">React</SelectItem>
                            <SelectItem value="vue">Vue.js</SelectItem>
                            <SelectItem value="svelte">Svelte</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Slider Value: {sliderValue[0]}</Label>
                      <Slider
                        value={sliderValue}
                        onValueChange={setSliderValue}
                        max={100}
                        step={1}
                        className="w-full"
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="settings" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Settings Panel</CardTitle>
                    <CardDescription>
                      Toggle switches and other interactive components
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-base">Dark Mode</Label>
                        <div className="text-sm text-muted-foreground">
                          Toggle between light and dark themes
                        </div>
                      </div>
                      <Switch
                        checked={isDarkMode}
                        onCheckedChange={setIsDarkMode}
                      />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-base">Push Notifications</Label>
                        <div className="text-sm text-muted-foreground">
                          Receive notifications about updates
                        </div>
                      </div>
                      <Switch
                        checked={notifications}
                        onCheckedChange={setNotifications}
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Heart className="h-4 w-4 text-red-500" />
              <span className="text-sm text-muted-foreground">
                Built with love using shadcn/ui
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <a href="https://ui.shadcn.com" target="_blank" rel="noopener noreferrer">
                  shadcn/ui
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
                  Next.js
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer">
                  Tailwind CSS
                </a>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
