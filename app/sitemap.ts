import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://affordableglp-1.com";

  // Static pages
  const staticPages = [
    "",
    "/rankings",
    "/rankings/cheapest",
    "/rankings/brand-name",
    "/for-women",
    "/for-men",
    "/brand-name",
    "/quiz",
    "/fda-tracker",
    "/blog",
    "/faq",
    "/glossary",
    "/about",
    "/about/methodology",
    "/about/medical-team",
    "/about/editorial-standards",
    "/privacy",
    "/terms",
    "/affiliate-disclosure",
    "/medical-disclaimer",
    "/contact",
  ];

  // Provider pages (would be fetched from Sanity in production)
  const providers = [
    "hims",
    "ro",
    "henry-meds",
    "eden",
    "mochi-health",
    "noom",
    "lifemd",
    "gobymeds",
  ];

  // Medication pages
  const medications = [
    "semaglutide",
    "tirzepatide",
    "wegovy",
    "ozempic",
    "zepbound",
    "mounjaro",
  ];

  // Comparison pages
  const comparisons = [
    "hims-vs-ro",
    "henry-meds-vs-eden",
    "wegovy-vs-zepbound",
    "compounded-vs-brand",
  ];

  // Blog posts (would be fetched from Sanity in production)
  const blogPosts = [
    "semaglutide-vs-tirzepatide",
    "understanding-glp1-side-effects",
    "how-to-save-money-glp1-medications",
  ];

  const now = new Date();

  return [
    // Static pages
    ...staticPages.map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified: now,
      changeFrequency: page === "" ? "daily" as const : "weekly" as const,
      priority: page === "" ? 1 : page === "/rankings" ? 0.9 : 0.8,
    })),

    // Provider pages
    ...providers.map((slug) => ({
      url: `${baseUrl}/providers/${slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),

    // Medication pages
    ...medications.map((slug) => ({
      url: `${baseUrl}/medications/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),

    // Comparison pages
    ...comparisons.map((slug) => ({
      url: `${baseUrl}/compare/${slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),

    // Blog posts
    ...blogPosts.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
