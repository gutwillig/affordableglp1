import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProviderCard } from "@/components/marketing/provider-card";
import { AffiliateDisclosure } from "@/components/marketing/affiliate-disclosure";
import { Newsletter } from "@/components/marketing/newsletter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Best GLP-1 Providers for Women 2026",
  description:
    "Find the best GLP-1 telehealth providers for women. Compare semaglutide and tirzepatide options tailored to women's weight loss needs.",
};

const providersForWomen = [
  {
    _id: "1",
    _type: "provider" as const,
    name: "Hers (by Hims)",
    slug: { current: "hims", _type: "slug" as const },
    oneLineVerdict: "Best overall for women with a dedicated women's health platform",
    fdaStatus: "both" as const,
    scores: { overall: 94, pricing: 90, medicalQuality: 90, userExperience: 96, customerSupport: 92 },
    pricing: { startingPrice: 199, consultationFee: 0, shippingFee: 0 },
    pros: ["Dedicated women's health focus", "Women physicians available", "Comprehensive support for hormonal considerations"],
    featured: true,
  },
  {
    _id: "2",
    _type: "provider" as const,
    name: "Ro",
    slug: { current: "ro", _type: "slug" as const },
    oneLineVerdict: "Strong medical oversight with women's health expertise",
    fdaStatus: "both" as const,
    scores: { overall: 89, pricing: 85, medicalQuality: 92, userExperience: 90, customerSupport: 88 },
    pricing: { startingPrice: 249, consultationFee: 0, shippingFee: 0 },
    pros: ["Board-certified physicians", "Comprehensive metabolic health approach", "Good for complex health histories"],
    featured: true,
  },
  {
    _id: "3",
    _type: "provider" as const,
    name: "Mochi Health",
    slug: { current: "mochi-health", _type: "slug" as const },
    oneLineVerdict: "Holistic approach combining GLP-1 with lifestyle coaching",
    fdaStatus: "both" as const,
    scores: { overall: 85, pricing: 80, medicalQuality: 86, userExperience: 88, customerSupport: 84 },
    pricing: { startingPrice: 229, consultationFee: 0, shippingFee: 0 },
    pros: ["Lifestyle coaching included", "Nutrition guidance", "Modern app experience"],
    featured: true,
  },
];

const faqs = [
  {
    question: "Are GLP-1 medications safe for women?",
    answer: "GLP-1 medications like semaglutide and tirzepatide are FDA-approved for both men and women. However, women who are pregnant, planning to become pregnant, or breastfeeding should not use these medications. Discuss your specific health situation with your provider.",
  },
  {
    question: "Can I take GLP-1 medications while trying to conceive?",
    answer: "It's recommended to stop GLP-1 medications at least 2 months before trying to conceive. These medications can affect pregnancy, and there isn't enough research on their safety during pregnancy.",
  },
  {
    question: "Do GLP-1 medications affect hormones?",
    answer: "GLP-1 medications primarily affect blood sugar and appetite regulation. While weight loss can impact hormone levels (including estrogen and progesterone), the medications themselves don't directly alter hormonal balance.",
  },
  {
    question: "Are there providers with female physicians?",
    answer: "Yes, most telehealth providers have diverse medical teams. Hers (the women's division of Hims) specifically staffs women physicians and providers who specialize in women's health.",
  },
];

export default function ForWomenPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-cloud via-white to-cloud py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-medium text-forest uppercase tracking-wide mb-4">
              Best for Women
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-midnight leading-tight mb-6">
              Best GLP-1 Providers for Women in 2026
            </h1>
            <p className="text-lg text-slate mb-8">
              Find telehealth providers that understand women&apos;s unique weight loss
              journey, hormonal considerations, and health needs. We&apos;ve identified
              the best options with women-focused care.
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

      {/* Why Women-Specific Matters */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-midnight mb-4">
              Why Women&apos;s GLP-1 Care Matters
            </h2>
            <p className="text-slate">
              Women have unique considerations when it comes to GLP-1 medications
              and weight loss.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-14 h-14 mx-auto bg-coral/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-midnight mb-2">Hormonal Factors</h3>
              <p className="text-sm text-slate">
                Menstrual cycles, menopause, and hormonal changes can affect weight
                loss and medication response.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 mx-auto bg-sky/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-sky" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-midnight mb-2">Family Planning</h3>
              <p className="text-sm text-slate">
                Pregnancy considerations require careful planning around GLP-1
                medication use and timing.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 mx-auto bg-forest/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-midnight mb-2">Supportive Care</h3>
              <p className="text-sm text-slate">
                Providers who understand women&apos;s health offer better guidance and
                emotional support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Providers */}
      <section id="providers" className="py-12 md:py-16 bg-cloud/50">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-midnight mb-8 text-center">
            Top GLP-1 Providers for Women
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {providersForWomen.map((provider, index) => (
              <ProviderCard
                key={provider._id}
                provider={provider}
                rank={index + 1}
                variant={index === 0 ? "featured" : "default"}
                badge={index === 0 ? "Best for Women" : undefined}
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
              FAQs: GLP-1 Medications for Women
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
