import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Hero } from "@/components/marketing/hero";
import { ProviderCard } from "@/components/marketing/provider-card";
import { Newsletter } from "@/components/marketing/newsletter";
import { AffiliateDisclosure } from "@/components/marketing/affiliate-disclosure";

// Placeholder data - will be replaced with Sanity fetch
const featuredProviders = [
  {
    _id: "1",
    _type: "provider" as const,
    name: "Hims/Hers",
    slug: { current: "hims", _type: "slug" as const },
    oneLineVerdict:
      "Best overall value with reliable service and affordable compounded options",
    fdaStatus: "both" as const,
    scores: { overall: 92, pricing: 90, medicalQuality: 88, userExperience: 95, customerSupport: 90 },
    pricing: { startingPrice: 199, consultationFee: 0, shippingFee: 0 },
    pros: [
      "Free consultation and shipping",
      "Both brand-name and compounded options",
      "Excellent mobile app experience",
    ],
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
    pros: [
      "Strong medical oversight",
      "Insurance support available",
      "Comprehensive program approach",
    ],
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
    pros: [
      "Lowest starting price",
      "Simple flat-rate pricing",
      "Fast intake process",
    ],
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
    pros: [
      "Personalized dosing approach",
      "Responsive customer support",
      "Transparent pricing",
    ],
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
    pros: [
      "Holistic program approach",
      "Lifestyle coaching included",
      "Modern user interface",
    ],
    featured: true,
  },
];

const audienceCards = [
  {
    title: "Best for Women",
    description:
      "Providers that excel in supporting women's unique weight loss journeys",
    href: "/for-women",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
  },
  {
    title: "Best for Men",
    description: "Top-rated providers with programs designed for men's needs",
    href: "/for-men",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
  },
  {
    title: "Brand-Name Only",
    description: "Providers offering FDA-approved Wegovy and Zepbound",
    href: "/brand-name",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: "Cheapest Options",
    description: "Most affordable compounded semaglutide and tirzepatide",
    href: "/rankings/cheapest",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        eyebrow="Compare GLP-1 Telehealth Providers"
        title="Find the Most Affordable Semaglutide & Tirzepatide Options"
        subtitle="Compare prices, read unbiased reviews, and find the best GLP-1 telehealth provider for your weight loss goals. Updated weekly with the latest pricing and FDA news."
        primaryCta={{ text: "Compare Providers", href: "/rankings" }}
        secondaryCta={{ text: "Take the Quiz", href: "/quiz" }}
        size="large"
      />

      {/* Trust Strip */}
      <section className="border-y bg-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-sm">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-forest"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-slate">
                <strong className="text-midnight">100,000+</strong> readers
                monthly
              </span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-forest"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
              </svg>
              <span className="text-slate">
                Medically reviewed content
              </span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-forest"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-slate">
                <strong className="text-midnight">10+</strong> providers
                compared
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliate Disclosure (inline) */}
      <section className="bg-cloud/50 py-3">
        <div className="container mx-auto px-4 text-center">
          <AffiliateDisclosure variant="inline" />
        </div>
      </section>

      {/* How We Evaluate */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-midnight mb-4">
              How We Evaluate Providers
            </h2>
            <p className="text-slate max-w-2xl mx-auto">
              Our editorial team rigorously researches and tests each provider.
              Here&apos;s what we look at:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-forest/10 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-forest"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-midnight mb-2">
                All-In Pricing
              </h3>
              <p className="text-sm text-slate">
                We calculate total Year 1 costs including medication,
                consultations, and shipping. No hidden fees.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-sky/10 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-sky"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-midnight mb-2">
                Medical Quality
              </h3>
              <p className="text-sm text-slate">
                We assess physician oversight, pharmacy credentials, and
                regulatory compliance for each provider.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-amber/10 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-amber"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-midnight mb-2">
                User Experience
              </h3>
              <p className="text-sm text-slate">
                We test the intake process, app quality, and customer support
                response times firsthand.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="/about/methodology">Read Our Full Methodology</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Top Providers Leaderboard */}
      <section className="py-16 md:py-24 bg-cloud/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-midnight mb-4">
              Top 5 GLP-1 Providers
            </h2>
            <p className="text-slate max-w-2xl mx-auto">
              Our top-rated telehealth providers for semaglutide and tirzepatide
              in 2026, ranked by overall value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {featuredProviders.slice(0, 3).map((provider, index) => (
              <ProviderCard
                key={provider._id}
                provider={provider}
                rank={index + 1}
                variant={index === 0 ? "featured" : "default"}
                badge={index === 0 ? "Best Overall" : undefined}
              />
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-6">
            {featuredProviders.slice(3, 5).map((provider, index) => (
              <ProviderCard
                key={provider._id}
                provider={provider}
                rank={index + 4}
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild size="lg" className="bg-forest hover:bg-forest-light">
              <Link href="/rankings">View All Provider Rankings</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Audience Segmentation Cards */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-midnight mb-4">
              Find Your Perfect Match
            </h2>
            <p className="text-slate max-w-2xl mx-auto">
              Not sure which provider is right for you? Browse by category or
              take our quiz.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {audienceCards.map((card) => (
              <Link key={card.href} href={card.href}>
                <Card className="h-full hover:shadow-lg transition-shadow hover:border-forest/30">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto bg-cloud rounded-full flex items-center justify-center mb-4 text-forest">
                      {card.icon}
                    </div>
                    <h3 className="font-semibold text-midnight mb-2">
                      {card.title}
                    </h3>
                    <p className="text-sm text-slate">{card.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-slate mb-4">
              Not sure where to start? Let us help you find the right provider.
            </p>
            <Button asChild variant="outline" size="lg">
              <Link href="/quiz">Take the Provider Quiz &rarr;</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FDA Tracker Callout */}
      <section className="py-12 bg-midnight text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-amber/20 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-amber-light"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">FDA Tracker</h3>
                <p className="text-soft text-sm">
                  Stay informed about GLP-1 regulatory updates, warning letters,
                  and 503B status changes.
                </p>
              </div>
            </div>
            <Button asChild variant="secondary">
              <Link href="/fda-tracker">View FDA Updates</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="font-display text-3xl font-bold text-midnight mb-2">
                Latest from the Blog
              </h2>
              <p className="text-slate">Expert insights on GLP-1 medications</p>
            </div>
            <Button asChild variant="outline" className="hidden md:inline-flex">
              <Link href="/blog">View All Posts</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Placeholder blog posts */}
            {[
              {
                title: "Semaglutide vs Tirzepatide: Which is Right for You?",
                category: "Comparisons",
                date: "May 10, 2026",
              },
              {
                title: "Understanding GLP-1 Side Effects: What to Expect",
                category: "Side Effects",
                date: "May 8, 2026",
              },
              {
                title: "How to Save Money on GLP-1 Medications in 2026",
                category: "Cost & Insurance",
                date: "May 5, 2026",
              },
            ].map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-cloud" />
                <CardContent className="p-6">
                  <span className="text-xs font-medium text-forest uppercase tracking-wide">
                    {post.category}
                  </span>
                  <h3 className="font-semibold text-midnight mt-2 mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{post.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Button asChild variant="outline">
              <Link href="/blog">View All Posts</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Newsletter variant="hero" />
        </div>
      </section>
    </>
  );
}
