import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { RankingCard } from "@/components/marketing/ranking-card";
import { AffiliateDisclosure } from "@/components/marketing/affiliate-disclosure";
import { Newsletter } from "@/components/marketing/newsletter";

export const metadata: Metadata = {
  title: "Best GLP-1 Telehealth Providers 2026",
  description:
    "Compare the top GLP-1 telehealth providers ranked by price, quality, and user experience. Find affordable semaglutide and tirzepatide options.",
};

// Placeholder data - will be replaced with Sanity fetch
const rankedProviders = [
  {
    _id: "1",
    _type: "provider" as const,
    name: "Hims/Hers",
    slug: { current: "hims", _type: "slug" as const },
    oneLineVerdict: "Best overall value with reliable service and affordable compounded options",
    fdaStatus: "both" as const,
    scores: { overall: 92, pricing: 90, medicalQuality: 88, userExperience: 95, customerSupport: 90 },
    pricing: { startingPrice: 199, consultationFee: 0, shippingFee: 0 },
    pros: ["Free consultation and shipping", "Both brand-name and compounded options", "Excellent mobile app experience", "Fast prescription turnaround"],
    cons: ["Higher priced than budget options", "Limited state availability for some meds"],
    featured: true,
  },
  {
    _id: "2",
    _type: "provider" as const,
    name: "Ro",
    slug: { current: "ro", _type: "slug" as const },
    oneLineVerdict: "Trusted telehealth platform with comprehensive weight loss programs",
    fdaStatus: "both" as const,
    scores: { overall: 89, pricing: 85, medicalQuality: 92, userExperience: 90, customerSupport: 88 },
    pricing: { startingPrice: 249, consultationFee: 0, shippingFee: 0 },
    pros: ["Strong medical oversight", "Insurance support available", "Comprehensive program approach", "Established reputation"],
    cons: ["Higher starting price", "Longer intake process"],
    featured: true,
  },
  {
    _id: "3",
    _type: "provider" as const,
    name: "Henry Meds",
    slug: { current: "henry-meds", _type: "slug" as const },
    oneLineVerdict: "Budget-friendly compounded GLP-1 option with straightforward pricing",
    fdaStatus: "compounded" as const,
    scores: { overall: 86, pricing: 95, medicalQuality: 82, userExperience: 85, customerSupport: 84 },
    pricing: { startingPrice: 149, consultationFee: 0, shippingFee: 0 },
    pros: ["Lowest starting price", "Simple flat-rate pricing", "Fast intake process", "No hidden fees"],
    cons: ["Compounded only", "Less comprehensive program"],
    featured: true,
  },
  {
    _id: "4",
    _type: "provider" as const,
    name: "Eden",
    slug: { current: "eden", _type: "slug" as const },
    oneLineVerdict: "Quality compounded semaglutide with personalized medical care",
    fdaStatus: "compounded" as const,
    scores: { overall: 84, pricing: 88, medicalQuality: 85, userExperience: 82, customerSupport: 83 },
    pricing: { startingPrice: 179, consultationFee: 0, shippingFee: 0 },
    pros: ["Personalized dosing approach", "Responsive customer support", "Transparent pricing", "Good communication"],
    cons: ["Compounded only", "Smaller provider"],
    featured: true,
  },
  {
    _id: "5",
    _type: "provider" as const,
    name: "Mochi Health",
    slug: { current: "mochi-health", _type: "slug" as const },
    oneLineVerdict: "Modern approach to weight loss with GLP-1 and lifestyle coaching",
    fdaStatus: "both" as const,
    scores: { overall: 83, pricing: 80, medicalQuality: 86, userExperience: 88, customerSupport: 82 },
    pricing: { startingPrice: 229, consultationFee: 0, shippingFee: 0 },
    pros: ["Holistic program approach", "Lifestyle coaching included", "Modern user interface", "Educational content"],
    cons: ["Higher price point", "Newer provider"],
    featured: true,
  },
  {
    _id: "6",
    _type: "provider" as const,
    name: "Noom Med",
    slug: { current: "noom", _type: "slug" as const },
    oneLineVerdict: "Combines GLP-1 medications with Noom's proven behavior change program",
    fdaStatus: "both" as const,
    scores: { overall: 81, pricing: 72, medicalQuality: 84, userExperience: 90, customerSupport: 80 },
    pricing: { startingPrice: 299, consultationFee: 0, shippingFee: 0 },
    pros: ["Integrated behavior change", "Proven app platform", "Comprehensive support", "Insurance options"],
    cons: ["Expensive", "Requires Noom subscription"],
    featured: false,
  },
  {
    _id: "7",
    _type: "provider" as const,
    name: "LifeMD",
    slug: { current: "lifemd", _type: "slug" as const },
    oneLineVerdict: "Established telehealth with broad medication access",
    fdaStatus: "both" as const,
    scores: { overall: 79, pricing: 78, medicalQuality: 82, userExperience: 78, customerSupport: 78 },
    pricing: { startingPrice: 219, consultationFee: 0, shippingFee: 0 },
    pros: ["Wide medication availability", "Established platform", "Multiple treatment options"],
    cons: ["Middle of the road pricing", "Average user experience"],
    featured: false,
  },
  {
    _id: "8",
    _type: "provider" as const,
    name: "GobyMeds",
    slug: { current: "gobymeds", _type: "slug" as const },
    oneLineVerdict: "Affordable compounded option with straightforward service",
    fdaStatus: "compounded" as const,
    scores: { overall: 77, pricing: 92, medicalQuality: 75, userExperience: 74, customerSupport: 72 },
    pricing: { startingPrice: 159, consultationFee: 0, shippingFee: 0 },
    pros: ["Very affordable", "Simple process", "Fast shipping"],
    cons: ["Limited support", "Basic platform", "Compounded only"],
    featured: false,
  },
];

export default async function RankingsPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;
  const category = slug?.[0] || "all";

  // Filter providers based on category
  const filteredProviders = category === "all"
    ? rankedProviders
    : category === "cheapest"
      ? [...rankedProviders].sort((a, b) => (a.pricing.startingPrice || 0) - (b.pricing.startingPrice || 0))
      : category === "brand-name"
        ? rankedProviders.filter((p) => p.fdaStatus === "both" || (p.fdaStatus as string) === "approved")
        : rankedProviders;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cloud via-white to-cloud py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-medium text-forest uppercase tracking-wide mb-4">
              Updated May 2026
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-midnight leading-tight mb-4">
              Best GLP-1 Telehealth Providers
            </h1>
            <p className="text-lg text-slate mb-6">
              We researched and tested 10+ telehealth providers to find the best
              options for semaglutide and tirzepatide prescriptions. Here are
              our top picks ranked by overall value.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>By the AffordableGLP-1 Editorial Team</span>
              <span>|</span>
              <Link
                href="/about/methodology"
                className="text-forest hover:text-forest-light"
              >
                See our methodology
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliate Disclosure */}
      <section className="bg-cloud/50 py-3 border-y">
        <div className="container mx-auto px-4 text-center">
          <AffiliateDisclosure variant="inline" />
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-16 z-40 bg-white border-b py-4">
        <div className="container mx-auto px-4">
          <nav className="flex gap-1 overflow-x-auto">
            {[
              { value: "all", label: "All Providers", href: "/rankings" },
              { value: "cheapest", label: "Cheapest", href: "/rankings/cheapest" },
              { value: "brand-name", label: "Brand-Name", href: "/rankings/brand-name" },
              { value: "semaglutide", label: "Semaglutide", href: "/rankings/semaglutide" },
              { value: "tirzepatide", label: "Tirzepatide", href: "/rankings/tirzepatide" },
            ].map((tab) => (
              <Link
                key={tab.value}
                href={tab.href}
                className={`px-4 py-2 text-sm font-medium rounded-md whitespace-nowrap transition-colors ${
                  category === tab.value
                    ? "bg-forest text-white"
                    : "text-slate hover:bg-cloud hover:text-midnight"
                }`}
              >
                {tab.label}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      {/* Rankings List */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-4">
            {filteredProviders.map((provider, index) => (
              <RankingCard
                key={provider._id}
                provider={provider}
                position={index + 1}
                badge={index === 0 ? "Best Overall" : index === 1 ? "Runner Up" : undefined}
                highlight={provider.oneLineVerdict}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-12 bg-cloud/50 border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl font-bold text-midnight mb-4">
              How We Ranked These Providers
            </h2>
            <div className="prose prose-slate">
              <p>
                Our editorial team evaluated each provider across four key
                dimensions:
              </p>
              <ul>
                <li>
                  <strong>Pricing (30%):</strong> Total Year 1 cost including
                  medication, consultations, and shipping
                </li>
                <li>
                  <strong>Medical Quality (30%):</strong> Physician oversight,
                  pharmacy credentials, and regulatory compliance
                </li>
                <li>
                  <strong>User Experience (25%):</strong> Intake process, app
                  quality, and ease of use
                </li>
                <li>
                  <strong>Customer Support (15%):</strong> Response times,
                  helpfulness, and communication
                </li>
              </ul>
              <p>
                We update these rankings monthly to reflect pricing changes, new
                providers, and FDA regulatory updates.
              </p>
            </div>
            <Button asChild variant="outline" className="mt-6">
              <Link href="/about/methodology">Read Full Methodology</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Newsletter variant="default" />
        </div>
      </section>
    </>
  );
}
