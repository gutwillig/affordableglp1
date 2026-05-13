import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/studio/",
          "/go/", // Affiliate redirects
        ],
      },
    ],
    sitemap: "https://affordableglp-1.com/sitemap.xml",
  };
}
