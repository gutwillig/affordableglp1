import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ComparisonTable } from "@/components/marketing/comparison-table";
import { ScoreBadge } from "@/components/marketing/score-badge";
import { MedicalReviewer } from "@/components/marketing/medical-reviewer";
import { AffiliateDisclosure } from "@/components/marketing/affiliate-disclosure";
import { Newsletter } from "@/components/marketing/newsletter";

// Type definitions for comparison data
interface ComparisonProvider {
  _id: string;
  _type: "provider";
  name: string;
  slug: { current: string; _type: "slug" };
  oneLineVerdict: string;
  fdaStatus: "approved" | "compounded" | "both";
  scores: {
    overall: number;
    pricing: number;
    medicalQuality: number;
    userExperience: number;
    customerSupport: number;
  };
  pricing: {
    startingPrice: number;
    consultationFee: number;
    shippingFee: number;
  };
  pros: string[];
  cons: string[];
  affiliateUrl: string;
}

interface ComparisonTableRow {
  category: string;
  providerAValue: string;
  providerBValue: string;
  winner: "providerA" | "providerB" | "tie";
}

interface ComparisonFAQ {
  question: string;
  answer: string;
}

interface Comparison {
  title: string;
  slug: string;
  providerA: ComparisonProvider;
  providerB: ComparisonProvider;
  verdictSummary: string;
  winner: "providerA" | "providerB" | "tie";
  comparisonTable: ComparisonTableRow[];
  whenAWins: string[];
  whenBWins: string[];
  faqs: ComparisonFAQ[];
}

// Placeholder comparisons data
const comparisons: Record<string, Comparison> = {
  "hims-vs-ro": {
    title: "Hims vs Ro: Which GLP-1 Provider is Better in 2026?",
    slug: "hims-vs-ro",
    providerA: {
      _id: "1",
      _type: "provider",
      name: "Hims/Hers",
      slug: { current: "hims", _type: "slug" },
      oneLineVerdict: "Best overall value with reliable service",
      fdaStatus: "both",
      scores: { overall: 92, pricing: 90, medicalQuality: 88, userExperience: 95, customerSupport: 90 },
      pricing: { startingPrice: 199, consultationFee: 0, shippingFee: 0 },
      pros: ["Lower starting price", "Better mobile app", "Faster intake"],
      cons: ["Less comprehensive program", "Fewer insurance options"],
      affiliateUrl: "/go/hims",
    },
    providerB: {
      _id: "2",
      _type: "provider",
      name: "Ro",
      slug: { current: "ro", _type: "slug" },
      oneLineVerdict: "Trusted telehealth with comprehensive programs",
      fdaStatus: "both",
      scores: { overall: 89, pricing: 85, medicalQuality: 92, userExperience: 90, customerSupport: 88 },
      pricing: { startingPrice: 249, consultationFee: 0, shippingFee: 0 },
      pros: ["Stronger medical oversight", "Insurance support", "More comprehensive"],
      cons: ["Higher starting price", "Longer intake process"],
      affiliateUrl: "/go/ro",
    },
    verdictSummary: "Both Hims and Ro are excellent GLP-1 telehealth providers, but they excel in different areas. Hims offers a better value with lower starting prices ($199 vs $249/month) and a more polished mobile experience. Ro shines with stronger medical oversight and better insurance support. For most users seeking the best overall value, Hims is our recommendation. Choose Ro if medical comprehensiveness and potential insurance coverage are your priorities.",
    winner: "providerA",
    comparisonTable: [
      { category: "Starting Price", providerAValue: "$199/mo", providerBValue: "$249/mo", winner: "providerA" },
      { category: "Overall Score", providerAValue: "92", providerBValue: "89", winner: "providerA" },
      { category: "Consultation Fee", providerAValue: "Free", providerBValue: "Free", winner: "tie" },
      { category: "Medication Options", providerAValue: "Brand & Compounded", providerBValue: "Brand & Compounded", winner: "tie" },
      { category: "Medical Quality", providerAValue: "88", providerBValue: "92", winner: "providerB" },
      { category: "User Experience", providerAValue: "95", providerBValue: "90", winner: "providerA" },
      { category: "Insurance Support", providerAValue: "Limited", providerBValue: "Available", winner: "providerB" },
      { category: "State Availability", providerAValue: "48 states", providerBValue: "50 states", winner: "providerB" },
    ],
    whenAWins: [
      "You want the lowest starting price",
      "You prefer a polished mobile app experience",
      "You want faster prescription turnaround",
      "You're paying out of pocket",
    ],
    whenBWins: [
      "You want stronger medical oversight",
      "You might use insurance coverage",
      "You prefer a more comprehensive program",
      "You live in a state Hims doesn't cover",
    ],
    faqs: [
      {
        question: "Is Hims or Ro cheaper?",
        answer: "Hims is typically cheaper, with starting prices around $199/month compared to Ro's $249/month. Both offer free consultations and shipping.",
      },
      {
        question: "Which has better medication options?",
        answer: "Both Hims and Ro offer similar medication options, including brand-name (Wegovy, Zepbound) and compounded semaglutide and tirzepatide. Availability may vary by state.",
      },
      {
        question: "Can I switch from Hims to Ro or vice versa?",
        answer: "Yes, you can switch providers at any time. You'll need to complete a new intake process with the new provider, but your medical records can often be transferred.",
      },
    ],
  },
};

const medicalReviewer = {
  _id: "reviewer-1",
  _type: "medicalReviewer" as const,
  name: "Dr. Sarah Chen",
  slug: { current: "dr-sarah-chen", _type: "slug" as const },
  credentials: "MD, ABOM",
  title: "Board-Certified Obesity Medicine Specialist",
  shortBio: "Dr. Chen is a board-certified physician specializing in obesity medicine with over 10 years of experience.",
  specialties: ["Obesity Medicine", "Metabolic Health"],
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const comparison = comparisons[slug];

  if (!comparison) {
    return { title: "Comparison Not Found" };
  }

  return {
    title: comparison.title,
    description: `Compare ${comparison.providerA.name} vs ${comparison.providerB.name} for GLP-1 medications. See pricing, features, and our verdict.`,
  };
}

export default async function ComparisonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const comparison = comparisons[slug];

  if (!comparison) {
    notFound();
  }

  const { providerA, providerB } = comparison;
  const winnerProvider = comparison.winner === "providerA" ? providerA : comparison.winner === "providerB" ? providerB : null;

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-cloud via-white to-cloud py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-sm font-medium text-forest uppercase tracking-wide mb-4">
              Provider Comparison
            </span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-midnight leading-tight mb-6">
              {comparison.title}
            </h1>
            <p className="text-muted-foreground mb-4">Updated May 2026</p>

            {/* Quick Score Comparison */}
            <div className="flex items-center justify-center gap-8 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-white rounded-lg shadow-sm flex items-center justify-center mb-2">
                  <span className="text-xl font-bold text-muted-foreground">
                    {providerA.name.charAt(0)}
                  </span>
                </div>
                <p className="font-semibold text-midnight">{providerA.name}</p>
                <ScoreBadge score={providerA.scores.overall} size="sm" className="mt-2" />
              </div>
              <span className="font-display text-4xl font-bold text-muted-foreground">VS</span>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-white rounded-lg shadow-sm flex items-center justify-center mb-2">
                  <span className="text-xl font-bold text-muted-foreground">
                    {providerB.name.charAt(0)}
                  </span>
                </div>
                <p className="font-semibold text-midnight">{providerB.name}</p>
                <ScoreBadge score={providerB.scores.overall} size="sm" className="mt-2" />
              </div>
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

      {/* Verdict Summary */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className={winnerProvider ? "border-forest/30" : ""}>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-6 h-6 text-forest" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <h2 className="font-display text-xl font-semibold text-midnight">Our Verdict</h2>
                  {winnerProvider && (
                    <span className="ml-auto text-sm font-medium bg-forest/10 text-forest px-3 py-1 rounded-full">
                      Winner: {winnerProvider.name}
                    </span>
                  )}
                </div>
                <p className="text-slate">{comparison.verdictSummary}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Side-by-Side Comparison Table */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl font-semibold text-midnight mb-6 text-center">
              Feature-by-Feature Comparison
            </h2>
            <ComparisonTable
              providerA={providerA}
              providerB={providerB}
              rows={comparison.comparisonTable}
            />
          </div>
        </div>
      </section>

      {/* When Each Wins */}
      <section className="py-12 bg-cloud/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="border-forest/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-forest/10 rounded-lg flex items-center justify-center">
                    <span className="text-lg font-bold text-forest">
                      {providerA.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="font-semibold text-midnight">
                    Choose {providerA.name} If...
                  </h3>
                </div>
                <ul className="space-y-2">
                  {comparison.whenAWins.map((reason: string, index: number) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <svg className="w-4 h-4 text-forest flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full mt-6 bg-forest hover:bg-forest-light">
                  <Link href={`/go/${providerA.slug.current}`}>
                    Visit {providerA.name}
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-sky/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-sky/10 rounded-lg flex items-center justify-center">
                    <span className="text-lg font-bold text-sky">
                      {providerB.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="font-semibold text-midnight">
                    Choose {providerB.name} If...
                  </h3>
                </div>
                <ul className="space-y-2">
                  {comparison.whenBWins.map((reason: string, index: number) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <svg className="w-4 h-4 text-sky flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="w-full mt-6 border-sky text-sky hover:bg-sky/10">
                  <Link href={`/go/${providerB.slug.current}`}>
                    Visit {providerB.name}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl font-semibold text-midnight mb-6">
              Frequently Asked Questions
            </h2>
            <Accordion className="w-full">
              {comparison.faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Medical Reviewer */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <MedicalReviewer reviewer={medicalReviewer} variant="signature" />
          </div>
        </div>
      </section>

      {/* Affiliate Disclosure */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <AffiliateDisclosure variant="full" />
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
