import { Metadata } from "next";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Newsletter } from "@/components/marketing/newsletter";

export const metadata: Metadata = {
  title: "GLP-1 FAQ | Frequently Asked Questions About Weight Loss Medications",
  description:
    "Get answers to common questions about GLP-1 medications like semaglutide and tirzepatide, telehealth providers, costs, side effects, and more.",
};

const faqCategories = {
  general: {
    label: "General",
    questions: [
      {
        question: "What are GLP-1 medications?",
        answer:
          "GLP-1 (glucagon-like peptide-1) medications are a class of drugs originally developed for type 2 diabetes that have been found to be highly effective for weight loss. They work by mimicking a natural hormone that regulates appetite and blood sugar, helping you feel full faster and longer. The most common GLP-1 medications for weight loss are semaglutide (Wegovy, Ozempic) and tirzepatide (Zepbound, Mounjaro).",
      },
      {
        question: "How much weight can I expect to lose with GLP-1 medications?",
        answer:
          "Clinical trials show that people taking GLP-1 medications can lose 15-20% of their body weight over a year. Results vary based on individual factors, diet, exercise, and medication dosage. Semaglutide (Wegovy) showed average weight loss of about 15%, while tirzepatide (Zepbound) showed even higher results in some studies, with participants losing up to 20-22% of their body weight.",
      },
      {
        question: "Are GLP-1 medications safe?",
        answer:
          "GLP-1 medications have been FDA-approved and extensively studied. Common side effects include nausea, vomiting, diarrhea, and constipation, which usually decrease over time as your body adjusts. Serious but rare side effects can include pancreatitis, gallbladder problems, and thyroid tumors (observed in animal studies). These medications are not recommended for people with a personal or family history of medullary thyroid carcinoma or Multiple Endocrine Neoplasia syndrome type 2.",
      },
      {
        question: "Do I need a prescription for GLP-1 medications?",
        answer:
          "Yes, all GLP-1 medications require a prescription from a licensed healthcare provider. Telehealth platforms like Hims, Ro, and Henry Meds connect you with licensed physicians who can evaluate your health history and prescribe these medications if appropriate.",
      },
    ],
  },
  providers: {
    label: "Providers",
    questions: [
      {
        question: "What is the difference between brand-name and compounded GLP-1 medications?",
        answer:
          "Brand-name medications (Wegovy, Zepbound, Ozempic, Mounjaro) are manufactured by pharmaceutical companies and are FDA-approved. Compounded medications contain the same active ingredients but are prepared by 503B-registered pharmacies at a lower cost. During drug shortages, compounding is legally permitted. Both should contain the same active ingredient, but compounded versions may have slight differences in inactive ingredients.",
      },
      {
        question: "Is compounded semaglutide legal?",
        answer:
          "Yes, compounded semaglutide is legal when prepared by FDA-registered 503B outsourcing facilities during a drug shortage. The FDA has declared semaglutide in shortage since 2022, which permits compounding. Reputable telehealth providers work with registered 503B pharmacies that must meet FDA quality standards.",
      },
      {
        question: "How do I choose between different telehealth providers?",
        answer:
          "Consider factors like pricing (both medication and consultation costs), medication options (brand vs. compounded), customer support, state availability, and additional services like coaching or nutrition support. Our rankings page compares all major providers on these factors to help you make an informed decision.",
      },
      {
        question: "Can I use insurance with telehealth GLP-1 providers?",
        answer:
          "Most telehealth providers don't directly bill insurance for their weight loss programs. However, some providers like Ro offer insurance support options, and you may be able to submit claims for reimbursement. Brand-name medications may be covered by insurance if you have coverage for weight loss medications and meet medical criteria.",
      },
    ],
  },
  cost: {
    label: "Cost & Insurance",
    questions: [
      {
        question: "How much do GLP-1 medications cost through telehealth?",
        answer:
          "Compounded GLP-1 medications through telehealth typically cost $149-299 per month, depending on the provider and dosage. Brand-name medications can cost $400-900+ per month without insurance. Most telehealth platforms offer free consultations and shipping, so the monthly medication cost is often your only expense.",
      },
      {
        question: "Why are compounded medications cheaper than brand-name?",
        answer:
          "Brand-name medications include the costs of research, development, clinical trials, and marketing. Compounded medications use the same active ingredients but are produced by compounding pharmacies with lower overhead costs. The savings are passed on to consumers.",
      },
      {
        question: "Are there any hidden fees I should know about?",
        answer:
          "Reputable providers are transparent about pricing. Watch out for separate consultation fees, shipping charges, or subscription requirements. Our reviews disclose all-in costs so you know exactly what to expect. Most top-rated providers offer free consultations and free shipping.",
      },
    ],
  },
  sideEffects: {
    label: "Side Effects",
    questions: [
      {
        question: "What are the most common side effects of GLP-1 medications?",
        answer:
          "The most common side effects are gastrointestinal: nausea, vomiting, diarrhea, constipation, and stomach pain. These typically occur when starting the medication or increasing dosage and often improve within a few weeks as your body adjusts. Eating smaller meals and avoiding high-fat foods can help manage these symptoms.",
      },
      {
        question: "How can I manage nausea from GLP-1 medications?",
        answer:
          "Tips for managing nausea include: eating smaller, more frequent meals; avoiding high-fat and greasy foods; staying hydrated; eating slowly; and avoiding lying down right after eating. If nausea persists, your provider may slow down your dose titration schedule or prescribe anti-nausea medication.",
      },
      {
        question: "Are there serious side effects I should watch for?",
        answer:
          "While rare, serious side effects can include severe allergic reactions, pancreatitis (severe stomach pain that radiates to your back), gallbladder problems, and kidney problems. Contact your healthcare provider immediately if you experience severe stomach pain, persistent vomiting, or signs of an allergic reaction.",
      },
    ],
  },
  eligibility: {
    label: "Eligibility",
    questions: [
      {
        question: "Who is eligible for GLP-1 weight loss medications?",
        answer:
          "GLP-1 medications for weight loss are typically prescribed to adults with a BMI of 30 or higher (obesity) or BMI of 27 or higher with at least one weight-related health condition like high blood pressure, type 2 diabetes, or high cholesterol. Your telehealth provider will evaluate your specific health situation.",
      },
      {
        question: "Can I take GLP-1 medications if I have diabetes?",
        answer:
          "Yes, many GLP-1 medications were originally developed for type 2 diabetes. However, if you're already taking diabetes medications, your provider needs to carefully manage your treatment plan to avoid low blood sugar. Always disclose all medications you're taking during your consultation.",
      },
      {
        question: "Are GLP-1 medications safe during pregnancy or breastfeeding?",
        answer:
          "No, GLP-1 medications are not recommended during pregnancy or breastfeeding. You should stop taking these medications at least 2 months before planning to conceive. If you become pregnant while taking a GLP-1, contact your healthcare provider immediately.",
      },
    ],
  },
};

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-cloud via-white to-cloud py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-midnight leading-tight mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-slate">
              Get answers to common questions about GLP-1 medications,
              telehealth providers, costs, and more.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Tabs defaultValue="general" className="w-full">
              <TabsList className="w-full justify-start flex-wrap mb-8">
                {Object.entries(faqCategories).map(([key, category]) => (
                  <TabsTrigger key={key} value={key}>
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {Object.entries(faqCategories).map(([key, category]) => (
                <TabsContent key={key} value={key}>
                  <Accordion className="w-full">
                    {category.questions.map((faq, index) => (
                      <AccordionItem key={index} value={`${key}-${index}`}>
                        <AccordionTrigger className="text-left font-medium">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-slate">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-cloud/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-2xl font-bold text-midnight mb-4">
              Still have questions?
            </h2>
            <p className="text-slate mb-6">
              Our team is here to help. Check out our provider reviews or take
              our quiz to find the right provider for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/rankings"
                className="inline-flex items-center justify-center rounded-md bg-forest px-6 py-3 text-white hover:bg-forest-light transition-colors"
              >
                Compare Providers
              </Link>
              <Link
                href="/quiz"
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 hover:bg-accent transition-colors"
              >
                Take the Quiz
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Newsletter />
        </div>
      </section>
    </>
  );
}
