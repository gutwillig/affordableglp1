import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Newsletter } from "@/components/marketing/newsletter";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = slug?.[0] || "index";

  const titles: Record<string, string> = {
    index: "About Us | Affordable GLP-1",
    methodology: "Our Methodology | How We Rank GLP-1 Providers",
    "editorial-standards": "Editorial Standards | Affordable GLP-1",
  };

  return {
    title: titles[page] || "About Us",
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;
  const page = slug?.[0] || "index";

  if (page === "methodology") {
    return <MethodologyPage />;
  }

  if (page === "editorial-standards") {
    return <EditorialStandardsPage />;
  }

  // Main About page
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-cloud via-white to-cloud py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-midnight leading-tight mb-6">
              About Affordable GLP-1
            </h1>
            <p className="text-lg text-slate">
              We&apos;re on a mission to help people find affordable, safe access to
              GLP-1 weight loss medications through unbiased information and
              transparent comparisons.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl font-bold text-midnight mb-6">
              Our Mission
            </h2>
            <div className="prose prose-slate max-w-none">
              <p>
                GLP-1 medications like semaglutide and tirzepatide represent a
                breakthrough in weight loss treatment, but navigating the
                options can be overwhelming. Prices vary wildly, some providers
                are more trustworthy than others, and the regulatory landscape
                is constantly changing.
              </p>
              <p>
                We created AffordableGLP-1.com to cut through the noise. Our
                goal is simple: provide accurate, up-to-date information that
                helps you find the best GLP-1 provider for your needs and
                budget.
              </p>
              <p>
                Every review, comparison, and recommendation on our site is
                based on thorough research, real testing, and input from
                medical professionals. We believe everyone deserves access to
                accurate health information to make informed decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-12 md:py-16 bg-cloud/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl font-bold text-midnight mb-8 text-center">
              What We Do
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto bg-forest/10 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-midnight mb-2">
                    Research & Test
                  </h3>
                  <p className="text-sm text-slate">
                    We personally evaluate each provider&apos;s intake process, app
                    experience, and customer support.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto bg-sky/10 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-sky" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-midnight mb-2">
                    Compare & Rank
                  </h3>
                  <p className="text-sm text-slate">
                    We use a transparent methodology to score providers on
                    pricing, quality, and user experience.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto bg-amber/10 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-midnight mb-2">
                    Educate & Update
                  </h3>
                  <p className="text-sm text-slate">
                    We keep our content current with the latest pricing, FDA
                    updates, and industry changes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl font-bold text-midnight mb-6">
              Learn More
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link
                href="/about/methodology"
                className="block p-6 border rounded-lg hover:border-forest hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 bg-forest/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-midnight mb-2">
                  Our Methodology
                </h3>
                <p className="text-sm text-slate">
                  How we research, test, and rank GLP-1 providers.
                </p>
              </Link>
              <Link
                href="/about/editorial-standards"
                className="block p-6 border rounded-lg hover:border-forest hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 bg-sky/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-sky" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-midnight mb-2">
                  Editorial Standards
                </h3>
                <p className="text-sm text-slate">
                  Our commitment to accuracy and transparency.
                </p>
              </Link>
              <Link
                href="/affiliate-disclosure"
                className="block p-6 border rounded-lg hover:border-forest hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 bg-amber/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-midnight mb-2">
                  Affiliate Disclosure
                </h3>
                <p className="text-sm text-slate">
                  How we make money and maintain editorial independence.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 bg-cloud/50">
        <div className="container mx-auto px-4">
          <Newsletter />
        </div>
      </section>
    </>
  );
}

function MethodologyPage() {
  const scoringCategories = [
    {
      title: "Pricing",
      weight: "30%",
      color: "forest",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      items: [
        "Monthly medication cost",
        "Initial consultation fees",
        "Follow-up visit costs",
        "Shipping fees",
        "Required subscription costs"
      ]
    },
    {
      title: "Medical Quality",
      weight: "30%",
      color: "sky",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      items: [
        "Physician credentials and oversight",
        "Pharmacy 503B registration",
        "FDA regulatory standing",
        "Medical intake thoroughness",
        "Follow-up care protocols"
      ]
    },
    {
      title: "User Experience",
      weight: "25%",
      color: "amber",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      items: [
        "Website and app quality",
        "Intake process ease and speed",
        "Prescription turnaround time",
        "Account management features",
        "Communication clarity"
      ]
    },
    {
      title: "Customer Support",
      weight: "15%",
      color: "coral",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      items: [
        "Response time to inquiries",
        "Support channel availability",
        "Helpfulness of responses",
        "Issue resolution effectiveness"
      ]
    }
  ];

  return (
    <>
      <section className="bg-gradient-to-br from-cloud via-white to-cloud py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">Transparent Scoring</Badge>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-midnight leading-tight mb-6">
              Our Methodology
            </h1>
            <p className="text-lg text-slate">
              We evaluate each GLP-1 telehealth provider using a comprehensive methodology
              that considers four key dimensions.
            </p>
          </div>
        </div>
      </section>

      {/* Scoring Categories */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {scoringCategories.map((category) => (
                <Card key={category.title} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        category.color === "forest" ? "bg-forest/10 text-forest" :
                        category.color === "sky" ? "bg-sky/10 text-sky" :
                        category.color === "amber" ? "bg-amber/10 text-amber" :
                        "bg-coral/10 text-coral"
                      }`}>
                        {category.icon}
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-semibold text-midnight">
                          {category.title}
                        </h3>
                        <span className={`text-sm font-mono font-semibold ${
                          category.color === "forest" ? "text-forest" :
                          category.color === "sky" ? "text-sky" :
                          category.color === "amber" ? "text-amber" :
                          "text-coral"
                        }`}>
                          {category.weight} of score
                        </span>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate">
                          <svg className="w-4 h-4 text-forest flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process & Independence */}
      <section className="py-12 md:py-16 bg-cloud/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-sky/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-sky" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold text-midnight mb-3">
                How We Stay Current
              </h3>
              <p className="text-slate">
                We update our reviews and rankings regularly to reflect pricing changes,
                new features, FDA updates, and user feedback. Major updates are noted with
                revision dates on each page.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-forest/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold text-midnight mb-3">
                Editorial Independence
              </h3>
              <p className="text-slate">
                While we earn affiliate commissions from some providers, our rankings
                and reviews are based solely on our evaluation criteria. Affiliate
                relationships never influence our ratings or recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function EditorialStandardsPage() {
  const principles = [
    {
      title: "Accuracy",
      description: "All claims are fact-checked and sourced. Medical information is reviewed by qualified healthcare professionals. We correct errors promptly and transparently.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "forest"
    },
    {
      title: "Independence",
      description: "Our editorial content is never influenced by affiliate relationships, advertising, or provider partnerships. Rankings and recommendations are based solely on our evaluation criteria.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      color: "sky"
    },
    {
      title: "Transparency",
      description: "We clearly disclose our affiliate relationships and how we make money. We explain our methodology and update content with revision dates.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      color: "amber"
    },
    {
      title: "Regular Updates",
      description: "We regularly review and update our content to ensure accuracy. FDA regulatory changes and pricing updates are reflected promptly.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      color: "coral"
    }
  ];

  return (
    <>
      <section className="bg-gradient-to-br from-cloud via-white to-cloud py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">Trust & Integrity</Badge>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-midnight leading-tight mb-6">
              Editorial Standards
            </h1>
            <p className="text-lg text-slate">
              Our commitment to accuracy, transparency, and editorial independence.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl font-bold text-midnight mb-8 text-center">
              Our Principles
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {principles.map((principle) => (
                <Card key={principle.title} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                      principle.color === "forest" ? "bg-forest/10 text-forest" :
                      principle.color === "sky" ? "bg-sky/10 text-sky" :
                      principle.color === "amber" ? "bg-amber/10 text-amber" :
                      "bg-coral/10 text-coral"
                    }`}>
                      {principle.icon}
                    </div>
                    <h3 className="font-display text-lg font-semibold text-midnight mb-2">
                      {principle.title}
                    </h3>
                    <p className="text-sm text-slate">
                      {principle.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Corrections & Contact */}
      <section className="py-12 md:py-16 bg-cloud/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-amber/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold text-midnight mb-3">
                Corrections Policy
              </h3>
              <p className="text-slate">
                If we make an error, we correct it promptly and note the correction on the page.
                For significant errors, we may issue a separate correction notice.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-sky/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-sky" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold text-midnight mb-3">
                Contact Us
              </h3>
              <p className="text-slate mb-4">
                Have a question or concern about our content?
              </p>
              <a
                href="mailto:editorial@affordableglp-1.com"
                className="text-forest hover:text-forest-light font-medium transition-colors"
              >
                editorial@affordableglp-1.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
