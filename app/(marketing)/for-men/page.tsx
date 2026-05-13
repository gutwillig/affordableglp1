import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProviderCard } from "@/components/marketing/provider-card";
import { AffiliateDisclosure } from "@/components/marketing/affiliate-disclosure";
import { Newsletter } from "@/components/marketing/newsletter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Best GLP-1 Providers for Men 2026",
  description:
    "Find the best GLP-1 telehealth providers for men. Compare semaglutide and tirzepatide options for men's weight loss and metabolic health.",
};

const providersForMen = [
  {
    _id: "1",
    _type: "provider" as const,
    name: "Hims",
    slug: { current: "hims", _type: "slug" as const },
    oneLineVerdict: "Best overall for men with streamlined, no-nonsense service",
    fdaStatus: "both" as const,
    scores: { overall: 92, pricing: 90, medicalQuality: 88, userExperience: 95, customerSupport: 90 },
    pricing: { startingPrice: 199, consultationFee: 0, shippingFee: 0 },
    pros: ["Men's health expertise", "Fast, efficient process", "Discreet packaging and billing"],
    featured: true,
  },
  {
    _id: "2",
    _type: "provider" as const,
    name: "Ro",
    slug: { current: "ro", _type: "slug" as const },
    oneLineVerdict: "Comprehensive approach with strong medical oversight",
    fdaStatus: "both" as const,
    scores: { overall: 89, pricing: 85, medicalQuality: 92, userExperience: 90, customerSupport: 88 },
    pricing: { startingPrice: 249, consultationFee: 0, shippingFee: 0 },
    pros: ["Thorough health evaluation", "Insurance support available", "Metabolic health focus"],
    featured: true,
  },
  {
    _id: "3",
    _type: "provider" as const,
    name: "Henry Meds",
    slug: { current: "henry-meds", _type: "slug" as const },
    oneLineVerdict: "Budget-friendly option with straightforward pricing",
    fdaStatus: "compounded" as const,
    scores: { overall: 86, pricing: 95, medicalQuality: 82, userExperience: 85, customerSupport: 84 },
    pricing: { startingPrice: 149, consultationFee: 0, shippingFee: 0 },
    pros: ["Lowest starting price", "Simple process", "No hidden fees"],
    featured: true,
  },
];

const faqs = [
  {
    question: "How effective are GLP-1 medications for men?",
    answer: "Clinical trials show similar effectiveness for men and women, with average weight loss of 15-20% of body weight over a year. Some studies suggest men may lose weight slightly faster initially due to higher muscle mass and metabolic rate.",
  },
  {
    question: "Will GLP-1 medications affect testosterone?",
    answer: "GLP-1 medications don't directly affect testosterone levels. However, significant weight loss can actually improve testosterone levels in men with obesity, as excess fat tissue can convert testosterone to estrogen.",
  },
  {
    question: "Can I maintain muscle while using GLP-1 medications?",
    answer: "Yes, but it requires attention to protein intake and resistance training. GLP-1 medications can cause some muscle loss along with fat loss, so maintaining adequate protein (0.7-1g per pound of body weight) and strength training is important.",
  },
  {
    question: "Are there discreet shipping options?",
    answer: "Yes, most telehealth providers ship medications in plain packaging with no indication of contents. Billing statements are also typically discreet, showing the company name rather than specific medication details.",
  },
];

export default function ForMenPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-cloud via-white to-cloud py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-medium text-forest uppercase tracking-wide mb-4">
              Best for Men
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-midnight leading-tight mb-6">
              Best GLP-1 Providers for Men in 2026
            </h1>
            <p className="text-lg text-slate mb-8">
              Find telehealth providers with efficient, no-nonsense service
              designed for men&apos;s weight loss and metabolic health goals. Get
              started with a discreet, streamlined process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-forest hover:bg-forest-light">
                <Link href="#providers">View Top Providers</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/quiz">Take the Quiz</Link>
              </Button>
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

      {/* Key Considerations */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-midnight mb-4">
              GLP-1 Considerations for Men
            </h2>
            <p className="text-slate">
              What men should know when choosing a GLP-1 telehealth provider.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-14 h-14 mx-auto bg-forest/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-midnight mb-2">Metabolic Rate</h3>
              <p className="text-sm text-slate">
                Men typically have higher muscle mass and metabolic rates, which
                can influence dosing and response to GLP-1 medications.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 mx-auto bg-sky/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-sky" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="font-semibold text-midnight mb-2">Muscle Preservation</h3>
              <p className="text-sm text-slate">
                Maintaining muscle mass during weight loss requires adequate
                protein and resistance training alongside GLP-1 use.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 mx-auto bg-amber/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-midnight mb-2">Health Benefits</h3>
              <p className="text-sm text-slate">
                Weight loss can improve testosterone levels, cardiovascular health,
                and reduce risk of type 2 diabetes in men.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Providers */}
      <section id="providers" className="py-12 md:py-16 bg-cloud/50">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-midnight mb-8 text-center">
            Top GLP-1 Providers for Men
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {providersForMen.map((provider, index) => (
              <ProviderCard
                key={provider._id}
                provider={provider}
                rank={index + 1}
                variant={index === 0 ? "featured" : "default"}
                badge={index === 0 ? "Best for Men" : undefined}
              />
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="/rankings">View All Providers</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl font-semibold text-midnight mb-6 text-center">
              FAQs: GLP-1 Medications for Men
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
