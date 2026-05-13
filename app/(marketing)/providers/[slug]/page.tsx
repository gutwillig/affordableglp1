import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ScoreBadge, ScoreInline } from "@/components/marketing/score-badge";
import { FDABadge } from "@/components/marketing/fda-badge";
import { PricingTable } from "@/components/marketing/pricing-table";
import { MedicalReviewer } from "@/components/marketing/medical-reviewer";
import { AffiliateDisclosure } from "@/components/marketing/affiliate-disclosure";
import { ProviderCard } from "@/components/marketing/provider-card";
import { Newsletter } from "@/components/marketing/newsletter";

// Placeholder data
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const providers: Record<string, any> = {
  hims: {
    _id: "1",
    name: "Hims/Hers",
    slug: { current: "hims" },
    oneLineVerdict: "Best overall value with reliable service and affordable compounded options",
    description: "Hims (and Hers for women) is one of the largest telehealth platforms in the US, offering a comprehensive GLP-1 weight loss program with both compounded and brand-name medication options.",
    fdaStatus: "both",
    scores: { overall: 92, pricing: 90, medicalQuality: 88, userExperience: 95, customerSupport: 90 },
    pricing: { startingPrice: 199, consultationFee: 0, shippingFee: 0, priceDisclaimer: "Prices may vary based on dosage and medication type" },
    pros: ["Free consultation and shipping", "Both brand-name and compounded options", "Excellent mobile app experience", "Fast prescription turnaround", "Wide state availability"],
    cons: ["Higher priced than budget options", "Limited state availability for some meds", "Subscription auto-renews"],
    whoItsFor: ["Those seeking a trusted, established platform", "Users who want both brand-name and compounded options", "People who value a polished app experience"],
    whoItsNotFor: ["Budget-conscious users seeking the lowest price", "Those who prefer in-person consultations", "Users who want to avoid subscriptions"],
    affiliateUrl: "https://www.hims.com/weight-loss",
  },
};

const medicalReviewer = {
  _id: "reviewer-1",
  _type: "medicalReviewer" as const,
  name: "Dr. Sarah Chen",
  slug: { current: "dr-sarah-chen", _type: "slug" as const },
  credentials: "MD, ABOM",
  title: "Board-Certified Obesity Medicine Specialist",
  shortBio: "Dr. Chen is a board-certified physician specializing in obesity medicine with over 10 years of experience in metabolic health and weight management.",
  specialties: ["Obesity Medicine", "Metabolic Health", "GLP-1 Agonists"],
};

const alternatives = [
  {
    _id: "2",
    _type: "provider" as const,
    name: "Ro",
    slug: { current: "ro", _type: "slug" as const },
    oneLineVerdict: "Trusted telehealth platform with comprehensive weight loss programs",
    fdaStatus: "both" as const,
    scores: { overall: 89, pricing: 85, medicalQuality: 92, userExperience: 90, customerSupport: 88 },
    pricing: { startingPrice: 249, consultationFee: 0, shippingFee: 0 },
    pros: ["Strong medical oversight", "Insurance support available", "Comprehensive program approach"],
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
    pros: ["Lowest starting price", "Simple flat-rate pricing", "Fast intake process"],
  },
];

const faqs = [
  {
    question: "Is Hims legitimate for GLP-1 medications?",
    answer: "Yes, Hims is a legitimate, licensed telehealth platform that has been operating since 2017. They work with licensed physicians and accredited pharmacies to prescribe and dispense GLP-1 medications legally.",
  },
  {
    question: "Does Hims accept insurance for weight loss medications?",
    answer: "Hims does not directly bill insurance for their weight loss program, but they can provide documentation for you to submit for potential reimbursement. Some users have success getting partial reimbursement from their insurance.",
  },
  {
    question: "How long does it take to get a prescription from Hims?",
    answer: "Most users receive a prescription decision within 24-48 hours of completing their online consultation. If approved, medication typically ships within 2-3 business days.",
  },
  {
    question: "What medications does Hims offer for weight loss?",
    answer: "Hims offers both compounded semaglutide and brand-name options like Wegovy (when available). They also offer tirzepatide in select states. The specific medications available may vary by state and inventory.",
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const provider = providers[slug];

  if (!provider) {
    return { title: "Provider Not Found" };
  }

  return {
    title: `${provider.name} Review 2026: Is It Worth It?`,
    description: `Read our in-depth ${provider.name} review. ${provider.oneLineVerdict}. Compare pricing, pros & cons, and alternatives.`,
  };
}

export default async function ProviderReviewPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const provider = providers[slug];

  if (!provider) {
    notFound();
  }

  const pricingItems = [
    { item: "Monthly Medication", price: `$${provider.pricing.startingPrice}`, note: "Starting dose" },
    { item: "Initial Consultation", price: provider.pricing.consultationFee === 0 ? "Free" : `$${provider.pricing.consultationFee}`, note: "One-time" },
    { item: "Shipping", price: provider.pricing.shippingFee === 0 ? "Free" : `$${provider.pricing.shippingFee}`, note: "Per shipment" },
    { item: "Follow-up Visits", price: "Included", note: "As needed" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cloud via-white to-cloud py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-16 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center">
                    <span className="text-2xl font-bold text-muted-foreground">
                      {provider.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h1 className="font-display text-3xl md:text-4xl font-bold text-midnight">
                      {provider.name} Review
                    </h1>
                    <p className="text-muted-foreground">Updated May 2026</p>
                  </div>
                </div>
                <p className="text-lg text-slate mb-4">{provider.oneLineVerdict}</p>
                <div className="flex flex-wrap gap-2">
                  {provider.fdaStatus && <FDABadge status={provider.fdaStatus} />}
                  <Badge variant="outline">Telehealth</Badge>
                  <Badge variant="outline">Available in 48 states</Badge>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <ScoreBadge score={provider.scores.overall} size="lg" />
                <Button asChild className="w-full bg-forest hover:bg-forest-light">
                  <Link href={`/go/${provider.slug.current}`}>
                    Visit {provider.name}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts & Affiliate Disclosure */}
      <section className="border-y bg-white">
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-4 gap-4 text-center mb-6">
              <div>
                <p className="text-sm text-muted-foreground">Starting Price</p>
                <p className="font-mono text-xl font-bold text-midnight">
                  ${provider.pricing.startingPrice}/mo
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Consultation</p>
                <p className="font-mono text-xl font-bold text-forest">Free</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Shipping</p>
                <p className="font-mono text-xl font-bold text-forest">Free</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Medication Type</p>
                <p className="font-semibold text-midnight">
                  {provider.fdaStatus === "both" ? "Brand & Compounded" : provider.fdaStatus === "approved" ? "Brand-Name" : "Compounded"}
                </p>
              </div>
            </div>
            <AffiliateDisclosure variant="inline" className="text-center" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* In One Paragraph (AEO Summary) */}
            <div className="bg-cloud rounded-lg p-6 mb-12">
              <h2 className="font-semibold text-midnight mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-forest" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                In One Paragraph
              </h2>
              <p className="text-slate">
                {provider.name} is a leading telehealth platform for GLP-1 weight loss medications, scoring {provider.scores.overall}/100 in our evaluation. Starting at ${provider.pricing.startingPrice}/month with free consultations and shipping, they offer {provider.fdaStatus === "both" ? "both brand-name (Wegovy, Zepbound) and more affordable compounded options" : "compounded semaglutide and tirzepatide"}. The platform stands out for its polished mobile app, fast prescription turnaround (usually 24-48 hours), and responsive customer support. While not the cheapest option available, {provider.name} provides excellent value for users who want a reliable, established telehealth provider with multiple medication options.
              </p>
            </div>

            {/* Detailed Scores */}
            <Card className="mb-12">
              <CardContent className="p-6">
                <h2 className="font-display text-xl font-semibold text-midnight mb-6">
                  How We Scored {provider.name}
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex items-center justify-between p-4 bg-cloud/50 rounded-lg">
                    <div>
                      <p className="font-medium text-midnight">Pricing</p>
                      <p className="text-sm text-muted-foreground">All-in cost value</p>
                    </div>
                    <ScoreInline score={provider.scores.pricing} />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-cloud/50 rounded-lg">
                    <div>
                      <p className="font-medium text-midnight">Medical Quality</p>
                      <p className="text-sm text-muted-foreground">Physician oversight</p>
                    </div>
                    <ScoreInline score={provider.scores.medicalQuality} />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-cloud/50 rounded-lg">
                    <div>
                      <p className="font-medium text-midnight">User Experience</p>
                      <p className="text-sm text-muted-foreground">App & intake process</p>
                    </div>
                    <ScoreInline score={provider.scores.userExperience} />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-cloud/50 rounded-lg">
                    <div>
                      <p className="font-medium text-midnight">Customer Support</p>
                      <p className="text-sm text-muted-foreground">Response & helpfulness</p>
                    </div>
                    <ScoreInline score={provider.scores.customerSupport} />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pricing Breakdown */}
            <div className="mb-12">
              <h2 className="font-display text-xl font-semibold text-midnight mb-4">
                Pricing Breakdown
              </h2>
              <PricingTable items={pricingItems} providerName={provider.name} />
            </div>

            {/* Pros and Cons */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-midnight mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-forest" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Pros
                  </h3>
                  <ul className="space-y-2">
                    {provider.pros.map((pro: string, index: number) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <svg className="w-4 h-4 text-forest flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-midnight mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-coral" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    Cons
                  </h3>
                  <ul className="space-y-2">
                    {provider.cons.map((con: string, index: number) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <svg className="w-4 h-4 text-coral flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Who It's For */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-forest/5 rounded-lg p-6">
                <h3 className="font-semibold text-midnight mb-3">
                  Who {provider.name} is Best For
                </h3>
                <ul className="space-y-2">
                  {provider.whoItsFor.map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <svg className="w-4 h-4 text-forest flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-coral/5 rounded-lg p-6">
                <h3 className="font-semibold text-midnight mb-3">
                  Who Should Look Elsewhere
                </h3>
                <ul className="space-y-2">
                  {provider.whoItsNotFor.map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <svg className="w-4 h-4 text-coral flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* FAQ */}
            <div className="mb-12">
              <h2 className="font-display text-xl font-semibold text-midnight mb-4">
                Frequently Asked Questions
              </h2>
              <Accordion className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Medical Reviewer */}
            <MedicalReviewer reviewer={medicalReviewer} variant="signature" className="mb-12" />

            {/* Full Disclosure */}
            <AffiliateDisclosure variant="full" className="mb-12" />

            {/* Alternatives */}
            <div className="mb-12">
              <h2 className="font-display text-xl font-semibold text-midnight mb-4">
                Alternatives to {provider.name}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {alternatives.map((alt) => (
                  <ProviderCard key={alt._id} provider={alt} variant="compact" />
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center py-8 bg-cloud rounded-lg">
              <h3 className="font-semibold text-midnight mb-4">
                Ready to get started with {provider.name}?
              </h3>
              <Button asChild size="lg" className="bg-forest hover:bg-forest-light">
                <Link href={`/go/${provider.slug.current}`}>
                  Visit {provider.name}
                </Link>
              </Button>
              <p className="text-xs text-muted-foreground mt-4">
                Affiliate link. We may earn a commission at no extra cost to you.
              </p>
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
