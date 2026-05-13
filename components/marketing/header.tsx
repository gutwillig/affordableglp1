"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const providerLinks = [
  {
    title: "All Providers",
    href: "/rankings",
    description: "Compare all GLP-1 telehealth providers",
  },
  {
    title: "Best for Women",
    href: "/for-women",
    description: "Top picks tailored for women",
  },
  {
    title: "Best for Men",
    href: "/for-men",
    description: "Top picks tailored for men",
  },
  {
    title: "Brand-Name Only",
    href: "/brand-name",
    description: "Providers offering FDA-approved medications",
  },
];

const medicationLinks = [
  {
    title: "Semaglutide",
    href: "/medications/semaglutide",
    description: "Wegovy, Ozempic, and compounded options",
  },
  {
    title: "Tirzepatide",
    href: "/medications/tirzepatide",
    description: "Zepbound, Mounjaro, and compounded options",
  },
  {
    title: "Wegovy",
    href: "/medications/wegovy",
    description: "FDA-approved semaglutide for weight loss",
  },
  {
    title: "Zepbound",
    href: "/medications/zepbound",
    description: "FDA-approved tirzepatide for weight loss",
  },
];

const resourceLinks = [
  { title: "Cost Calculator", href: "/cost/calculator" },
  { title: "FDA Tracker", href: "/fda-tracker" },
  { title: "Blog", href: "/blog" },
  { title: "FAQ", href: "/faq" },
  { title: "Glossary", href: "/glossary" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-display text-xl font-bold text-midnight">
            Affordable<span className="text-forest">GLP-1</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Providers</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  {providerLinks.map((link) => (
                    <li key={link.href}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={link.href}
                          className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          )}
                        >
                          <div className="text-sm font-medium leading-none">
                            {link.title}
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {link.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Medications</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  {medicationLinks.map((link) => (
                    <li key={link.href}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={link.href}
                          className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          )}
                        >
                          <div className="text-sm font-medium leading-none">
                            {link.title}
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {link.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Compare</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[300px] gap-3 p-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/compare/hims-vs-ro"
                        className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent"
                      >
                        <div className="text-sm font-medium">Hims vs Ro</div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/compare/henry-meds-vs-eden"
                        className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent"
                      >
                        <div className="text-sm font-medium">
                          Henry Meds vs Eden
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/compare/wegovy-vs-zepbound"
                        className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent"
                      >
                        <div className="text-sm font-medium">
                          Wegovy vs Zepbound
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-3 p-4">
                  {resourceLinks.map((link) => (
                    <li key={link.href}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={link.href}
                          className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent"
                        >
                          <div className="text-sm font-medium">{link.title}</div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Button variant="outline" asChild>
            <Link href="/quiz">Take the Quiz</Link>
          </Button>
          <Button asChild className="bg-forest hover:bg-forest-light">
            <Link href="/rankings">Find a Provider</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 mt-8">
              <div>
                <h3 className="font-semibold mb-2 text-muted-foreground text-sm uppercase tracking-wide">
                  Providers
                </h3>
                {providerLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block py-2 text-foreground hover:text-forest transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-muted-foreground text-sm uppercase tracking-wide">
                  Medications
                </h3>
                {medicationLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block py-2 text-foreground hover:text-forest transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-muted-foreground text-sm uppercase tracking-wide">
                  Resources
                </h3>
                {resourceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block py-2 text-foreground hover:text-forest transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-3 mt-4 pt-4 border-t">
                <Button variant="outline" asChild>
                  <Link href="/quiz" onClick={() => setMobileOpen(false)}>
                    Take the Quiz
                  </Link>
                </Button>
                <Button asChild className="bg-forest hover:bg-forest-light">
                  <Link href="/rankings" onClick={() => setMobileOpen(false)}>
                    Find a Provider
                  </Link>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
