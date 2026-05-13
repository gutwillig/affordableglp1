import { NextRequest, NextResponse } from "next/server";

// Affiliate URL mapping (would come from Sanity in production)
const affiliateUrls: Record<string, string> = {
  hims: "https://www.hims.com/weight-loss?utm_source=affordableglp1&utm_medium=affiliate",
  ro: "https://www.ro.co/weight-loss?utm_source=affordableglp1&utm_medium=affiliate",
  "henry-meds": "https://www.henrymeds.com/?utm_source=affordableglp1&utm_medium=affiliate",
  eden: "https://www.getedenhealth.com/?utm_source=affordableglp1&utm_medium=affiliate",
  "mochi-health": "https://www.joinmochi.com/?utm_source=affordableglp1&utm_medium=affiliate",
  noom: "https://www.noom.com/med/?utm_source=affordableglp1&utm_medium=affiliate",
  lifemd: "https://www.lifemd.com/?utm_source=affordableglp1&utm_medium=affiliate",
  gobymeds: "https://www.gobymeds.com/?utm_source=affordableglp1&utm_medium=affiliate",
  reflexmd: "https://www.reflexmd.com/?utm_source=affordableglp1&utm_medium=affiliate",
  shed: "https://www.joinshed.com/?utm_source=affordableglp1&utm_medium=affiliate",
};

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params;
  const searchParams = request.nextUrl.searchParams;

  // Get referrer and UTM parameters for tracking
  const referrer = request.headers.get("referer") || "";
  const utm_source = searchParams.get("utm_source") || "";
  const utm_medium = searchParams.get("utm_medium") || "";
  const utm_campaign = searchParams.get("utm_campaign") || "";
  const subid = searchParams.get("subid") || "";

  // Log click for analytics (would send to database/analytics in production)
  const clickData = {
    provider: slug,
    referrer,
    utm_source,
    utm_medium,
    utm_campaign,
    subid,
    timestamp: new Date().toISOString(),
    userAgent: request.headers.get("user-agent") || "",
  };

  // In production, send to analytics service
  console.log("Affiliate click:", clickData);

  // Get affiliate URL
  const affiliateUrl = affiliateUrls[slug];

  if (!affiliateUrl) {
    // Redirect to rankings if provider not found
    return NextResponse.redirect(new URL("/rankings", request.url));
  }

  // Build final URL with subid for conversion tracking
  const finalUrl = new URL(affiliateUrl);
  if (subid) {
    finalUrl.searchParams.set("subid", subid);
  }

  // Add click ID for tracking
  const clickId = `aglp1_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
  finalUrl.searchParams.set("clickid", clickId);

  return NextResponse.redirect(finalUrl.toString());
}
