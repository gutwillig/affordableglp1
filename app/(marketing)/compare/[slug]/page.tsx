import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ComparisonTable } from "@/components/marketing/comparison-table";
import { ScoreBadge } from "@/components/marketing/score-badge";
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
  "henry-meds-vs-eden": {
    title: "Henry Meds vs Eden: Which GLP-1 Provider is Better in 2026?",
    slug: "henry-meds-vs-eden",
    providerA: {
      _id: "3",
      _type: "provider",
      name: "Henry Meds",
      slug: { current: "henry-meds", _type: "slug" },
      oneLineVerdict: "Affordable compounded GLP-1 with great support",
      fdaStatus: "compounded",
      scores: { overall: 87, pricing: 92, medicalQuality: 85, userExperience: 86, customerSupport: 88 },
      pricing: { startingPrice: 149, consultationFee: 0, shippingFee: 0 },
      pros: ["Lowest prices available", "Responsive customer support", "Simple intake process"],
      cons: ["Compounded only", "Limited medication options"],
      affiliateUrl: "/go/henry-meds",
    },
    providerB: {
      _id: "4",
      _type: "provider",
      name: "Eden",
      slug: { current: "eden", _type: "slug" },
      oneLineVerdict: "Premium compounded medications with personalized care",
      fdaStatus: "compounded",
      scores: { overall: 85, pricing: 88, medicalQuality: 86, userExperience: 84, customerSupport: 85 },
      pricing: { startingPrice: 179, consultationFee: 0, shippingFee: 0 },
      pros: ["Personalized dosing", "Good clinical oversight", "Educational resources"],
      cons: ["Slightly higher prices", "Compounded only"],
      affiliateUrl: "/go/eden",
    },
    verdictSummary: "Henry Meds and Eden are both solid choices for compounded GLP-1 medications. Henry Meds wins on price ($149 vs $179/month) and customer support responsiveness. Eden offers slightly better personalization and educational resources. For budget-conscious users, Henry Meds is our recommendation. Choose Eden if you value personalized care and comprehensive patient education.",
    winner: "providerA",
    comparisonTable: [
      { category: "Starting Price", providerAValue: "$149/mo", providerBValue: "$179/mo", winner: "providerA" },
      { category: "Overall Score", providerAValue: "87", providerBValue: "85", winner: "providerA" },
      { category: "Consultation Fee", providerAValue: "Free", providerBValue: "Free", winner: "tie" },
      { category: "Medication Type", providerAValue: "Compounded", providerBValue: "Compounded", winner: "tie" },
      { category: "Medical Quality", providerAValue: "85", providerBValue: "86", winner: "providerB" },
      { category: "Customer Support", providerAValue: "88", providerBValue: "85", winner: "providerA" },
      { category: "Personalization", providerAValue: "Standard", providerBValue: "Enhanced", winner: "providerB" },
      { category: "Educational Resources", providerAValue: "Basic", providerBValue: "Comprehensive", winner: "providerB" },
    ],
    whenAWins: [
      "You want the lowest price possible",
      "You prioritize responsive customer support",
      "You prefer a simple, no-frills experience",
      "You're comfortable with standard dosing protocols",
    ],
    whenBWins: [
      "You want personalized dosing adjustments",
      "You value educational resources and guidance",
      "You prefer more hands-on clinical support",
      "You don't mind paying slightly more for extras",
    ],
    faqs: [
      {
        question: "Are Henry Meds and Eden legitimate?",
        answer: "Yes, both Henry Meds and Eden are legitimate telehealth providers that work with licensed physicians and 503B compounding pharmacies. They're both compliant with state telehealth regulations.",
      },
      {
        question: "Do either offer brand-name medications?",
        answer: "No, both Henry Meds and Eden specialize in compounded medications. If you specifically want brand-name Wegovy or Zepbound, consider Hims or Ro instead.",
      },
      {
        question: "Which has faster shipping?",
        answer: "Both typically ship within 3-5 business days after prescription approval. Henry Meds has a slight edge with some users reporting 2-3 day delivery times.",
      },
    ],
  },
  "wegovy-vs-zepbound": {
    title: "Wegovy vs Zepbound: Which GLP-1 Medication is Better in 2026?",
    slug: "wegovy-vs-zepbound",
    providerA: {
      _id: "med-1",
      _type: "provider",
      name: "Wegovy",
      slug: { current: "wegovy", _type: "slug" },
      oneLineVerdict: "The original FDA-approved GLP-1 for weight loss",
      fdaStatus: "approved",
      scores: { overall: 90, pricing: 75, medicalQuality: 95, userExperience: 92, customerSupport: 90 },
      pricing: { startingPrice: 1349, consultationFee: 0, shippingFee: 0 },
      pros: ["FDA-approved for weight loss", "Extensive clinical data", "Widely available"],
      cons: ["High retail price", "Weekly injections", "Supply shortages"],
      affiliateUrl: "/medications/wegovy",
    },
    providerB: {
      _id: "med-2",
      _type: "provider",
      name: "Zepbound",
      slug: { current: "zepbound", _type: "slug" },
      oneLineVerdict: "Newer dual-action GLP-1/GIP for enhanced weight loss",
      fdaStatus: "approved",
      scores: { overall: 92, pricing: 73, medicalQuality: 96, userExperience: 92, customerSupport: 90 },
      pricing: { startingPrice: 1059, consultationFee: 0, shippingFee: 0 },
      pros: ["Higher average weight loss", "Dual hormone action", "Lower list price"],
      cons: ["Newer with less long-term data", "Supply constraints", "Weekly injections"],
      affiliateUrl: "/medications/zepbound",
    },
    verdictSummary: "Both Wegovy (semaglutide) and Zepbound (tirzepatide) are FDA-approved, highly effective weight loss medications. Zepbound shows slightly higher average weight loss in clinical trials (up to 22% vs 15%) due to its dual GLP-1/GIP action. Wegovy has more long-term safety data and wider availability. For maximum weight loss potential, Zepbound has the edge. For those who prefer established medications with extensive research, Wegovy remains excellent.",
    winner: "providerB",
    comparisonTable: [
      { category: "Average Weight Loss", providerAValue: "~15%", providerBValue: "~22%", winner: "providerB" },
      { category: "Retail Price", providerAValue: "$1,349/mo", providerBValue: "$1,059/mo", winner: "providerB" },
      { category: "FDA Approval", providerAValue: "2021", providerBValue: "2023", winner: "providerA" },
      { category: "Mechanism", providerAValue: "GLP-1", providerBValue: "GLP-1 + GIP", winner: "providerB" },
      { category: "Long-term Data", providerAValue: "Extensive", providerBValue: "Growing", winner: "providerA" },
      { category: "Dosing", providerAValue: "Weekly", providerBValue: "Weekly", winner: "tie" },
      { category: "Insurance Coverage", providerAValue: "Variable", providerBValue: "Variable", winner: "tie" },
      { category: "Availability", providerAValue: "Limited", providerBValue: "Limited", winner: "tie" },
    ],
    whenAWins: [
      "You prefer a medication with more long-term data",
      "Your insurance covers Wegovy but not Zepbound",
      "You've tried tirzepatide and prefer semaglutide",
      "Wegovy is more available in your area",
    ],
    whenBWins: [
      "You want maximum weight loss potential",
      "You prefer the dual-action mechanism",
      "Your insurance covers Zepbound",
      "You want the lower list price option",
    ],
    faqs: [
      {
        question: "Which causes more side effects?",
        answer: "Both medications have similar gastrointestinal side effects (nausea, vomiting, diarrhea). Some studies suggest Zepbound may have slightly higher rates of GI side effects, but individual responses vary significantly.",
      },
      {
        question: "Can I switch between Wegovy and Zepbound?",
        answer: "Yes, with your doctor's guidance. Switching typically involves a dose adjustment period. Many patients switch to try the other option or due to insurance/availability reasons.",
      },
      {
        question: "Are compounded versions the same?",
        answer: "Compounded semaglutide and tirzepatide use the same active ingredients but are made by compounding pharmacies, not the brand manufacturers. They're significantly cheaper but have different regulatory oversight.",
      },
    ],
  },
  "compounded-vs-brand": {
    title: "Compounded vs Brand-Name GLP-1: Which Should You Choose?",
    slug: "compounded-vs-brand",
    providerA: {
      _id: "type-1",
      _type: "provider",
      name: "Compounded",
      slug: { current: "compounded", _type: "slug" },
      oneLineVerdict: "Affordable access to GLP-1 medications",
      fdaStatus: "compounded",
      scores: { overall: 85, pricing: 95, medicalQuality: 80, userExperience: 85, customerSupport: 85 },
      pricing: { startingPrice: 149, consultationFee: 0, shippingFee: 0 },
      pros: ["80-90% cheaper than brand", "Good availability", "Multiple providers"],
      cons: ["Not FDA-approved products", "Variable quality", "Regulatory uncertainty"],
      affiliateUrl: "/rankings",
    },
    providerB: {
      _id: "type-2",
      _type: "provider",
      name: "Brand-Name",
      slug: { current: "brand-name", _type: "slug" },
      oneLineVerdict: "FDA-approved medications with proven safety",
      fdaStatus: "approved",
      scores: { overall: 92, pricing: 60, medicalQuality: 98, userExperience: 90, customerSupport: 88 },
      pricing: { startingPrice: 1000, consultationFee: 0, shippingFee: 0 },
      pros: ["FDA-approved", "Consistent quality", "Insurance may cover"],
      cons: ["Very expensive", "Supply shortages", "Requires prior authorization"],
      affiliateUrl: "/brand-name",
    },
    verdictSummary: "The choice between compounded and brand-name GLP-1s comes down to budget vs. certainty. Compounded medications cost $149-299/month vs $1,000+/month for brands, making them accessible to more people. However, brand-name medications have FDA approval, consistent manufacturing, and established safety profiles. If cost is your primary concern, compounded is a reasonable choice from reputable providers. If you can afford brand-name or have insurance coverage, it offers the highest assurance of quality.",
    winner: "tie",
    comparisonTable: [
      { category: "Monthly Cost", providerAValue: "$149-299", providerBValue: "$1,000+", winner: "providerA" },
      { category: "FDA Approval", providerAValue: "No", providerBValue: "Yes", winner: "providerB" },
      { category: "Quality Consistency", providerAValue: "Variable", providerBValue: "Consistent", winner: "providerB" },
      { category: "Availability", providerAValue: "Good", providerBValue: "Limited", winner: "providerA" },
      { category: "Insurance Coverage", providerAValue: "Never", providerBValue: "Sometimes", winner: "providerB" },
      { category: "Long-term Data", providerAValue: "Limited", providerBValue: "Extensive", winner: "providerB" },
      { category: "Provider Options", providerAValue: "Many", providerBValue: "Few", winner: "providerA" },
      { category: "Regulatory Standing", providerAValue: "Uncertain", providerBValue: "Stable", winner: "providerB" },
    ],
    whenAWins: [
      "Budget is your primary concern",
      "You don't have insurance coverage",
      "Brand-name is unavailable in your area",
      "You're comfortable with 503B pharmacy products",
    ],
    whenBWins: [
      "You can afford the higher cost",
      "Your insurance covers the medication",
      "You want FDA-approved products only",
      "You prioritize established safety data",
    ],
    faqs: [
      {
        question: "Are compounded GLP-1s safe?",
        answer: "Compounded medications from reputable 503B pharmacies are generally considered safe. However, they don't undergo the same FDA approval process as brand-name drugs. Choose providers that use FDA-registered 503B outsourcing facilities.",
      },
      {
        question: "Will compounded GLP-1s be banned?",
        answer: "The FDA can end compounding when drug shortages resolve. Currently, semaglutide remains on the shortage list. The regulatory landscape may change, so stay informed through our FDA Tracker.",
      },
      {
        question: "Is the active ingredient the same?",
        answer: "Yes, compounded semaglutide uses the same active ingredient as Wegovy/Ozempic. The difference is in manufacturing—brand-name is made by Novo Nordisk with FDA oversight, while compounded is made by compounding pharmacies.",
      },
    ],
  },
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
            <div className="flex items-center justify-center gap-4 md:gap-6 mt-8">
              {/* Provider A */}
              <div className="flex-1 max-w-[200px]">
                <Card className="p-6">
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 bg-cloud rounded-xl flex items-center justify-center mb-3">
                      <span className="text-3xl font-bold text-midnight">
                        {providerA.name.charAt(0)}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-semibold text-midnight mb-3">
                      {providerA.name}
                    </h3>
                    <ScoreBadge score={providerA.scores.overall} size="lg" />
                  </div>
                </Card>
              </div>

              {/* VS divider */}
              <div className="flex-shrink-0 text-sm font-medium text-muted-foreground uppercase tracking-wider">
                vs
              </div>

              {/* Provider B */}
              <div className="flex-1 max-w-[200px]">
                <Card className="p-6">
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 bg-cloud rounded-xl flex items-center justify-center mb-3">
                      <span className="text-3xl font-bold text-midnight">
                        {providerB.name.charAt(0)}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-semibold text-midnight mb-3">
                      {providerB.name}
                    </h3>
                    <ScoreBadge score={providerB.scores.overall} size="lg" />
                  </div>
                </Card>
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
