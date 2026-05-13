import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { MedicalReviewer } from "@/components/marketing/medical-reviewer";
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
    "medical-team": "Our Medical Team | Affordable GLP-1",
    "editorial-standards": "Editorial Standards | Affordable GLP-1",
  };

  return {
    title: titles[page] || "About Us",
  };
}

// Placeholder medical reviewers
const medicalReviewers = [
  {
    _id: "reviewer-1",
    _type: "medicalReviewer" as const,
    name: "Dr. Sarah Chen",
    slug: { current: "dr-sarah-chen", _type: "slug" as const },
    credentials: "MD, ABOM",
    title: "Board-Certified Obesity Medicine Specialist",
    shortBio:
      "Dr. Chen is a board-certified physician specializing in obesity medicine with over 10 years of experience in metabolic health and weight management.",
    specialties: ["Obesity Medicine", "Metabolic Health", "GLP-1 Agonists"],
  },
  {
    _id: "reviewer-2",
    _type: "medicalReviewer" as const,
    name: "Dr. Michael Torres",
    slug: { current: "dr-michael-torres", _type: "slug" as const },
    credentials: "PharmD",
    title: "Clinical Pharmacist",
    shortBio:
      "Dr. Torres is a clinical pharmacist with expertise in GLP-1 medications and compounding pharmacy regulations.",
    specialties: ["Clinical Pharmacy", "Drug Compounding", "Medication Safety"],
  },
];

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

  if (page === "medical-team") {
    return <MedicalTeamPage />;
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
            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                href="/about/methodology"
                className="block p-6 border rounded-lg hover:border-forest transition-colors"
              >
                <h3 className="font-semibold text-midnight mb-2">
                  Our Methodology
                </h3>
                <p className="text-sm text-slate">
                  How we research, test, and rank GLP-1 providers.
                </p>
              </Link>
              <Link
                href="/about/medical-team"
                className="block p-6 border rounded-lg hover:border-forest transition-colors"
              >
                <h3 className="font-semibold text-midnight mb-2">
                  Medical Team
                </h3>
                <p className="text-sm text-slate">
                  Meet the medical professionals who review our content.
                </p>
              </Link>
              <Link
                href="/about/editorial-standards"
                className="block p-6 border rounded-lg hover:border-forest transition-colors"
              >
                <h3 className="font-semibold text-midnight mb-2">
                  Editorial Standards
                </h3>
                <p className="text-sm text-slate">
                  Our commitment to accuracy and transparency.
                </p>
              </Link>
              <Link
                href="/affiliate-disclosure"
                className="block p-6 border rounded-lg hover:border-forest transition-colors"
              >
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
  return (
    <>
      <section className="bg-gradient-to-br from-cloud via-white to-cloud py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-midnight leading-tight mb-6">
              Our Methodology
            </h1>
            <p className="text-lg text-slate">
              How we research, evaluate, and rank GLP-1 telehealth providers.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-slate">
            <h2>Our Evaluation Process</h2>
            <p>
              We evaluate each GLP-1 telehealth provider using a comprehensive
              methodology that considers four key dimensions:
            </p>

            <h3>1. Pricing (30% of score)</h3>
            <p>We calculate the total Year 1 cost including:</p>
            <ul>
              <li>Monthly medication cost</li>
              <li>Initial consultation fees</li>
              <li>Follow-up visit costs</li>
              <li>Shipping fees</li>
              <li>Any required subscription costs</li>
            </ul>

            <h3>2. Medical Quality (30% of score)</h3>
            <p>We assess:</p>
            <ul>
              <li>Physician credentials and oversight</li>
              <li>Pharmacy 503B registration and compliance</li>
              <li>FDA regulatory standing</li>
              <li>Medical intake thoroughness</li>
              <li>Follow-up care protocols</li>
            </ul>

            <h3>3. User Experience (25% of score)</h3>
            <p>We personally test:</p>
            <ul>
              <li>Website and app quality</li>
              <li>Intake process ease and speed</li>
              <li>Prescription turnaround time</li>
              <li>Account management features</li>
              <li>Communication clarity</li>
            </ul>

            <h3>4. Customer Support (15% of score)</h3>
            <p>We evaluate:</p>
            <ul>
              <li>Response time to inquiries</li>
              <li>Support channel availability</li>
              <li>Helpfulness of responses</li>
              <li>Issue resolution effectiveness</li>
            </ul>

            <h2>How We Stay Current</h2>
            <p>
              We update our reviews and rankings regularly to reflect pricing
              changes, new features, FDA updates, and user feedback. Major
              updates are noted with revision dates on each page.
            </p>

            <h2>Editorial Independence</h2>
            <p>
              While we earn affiliate commissions from some providers, our
              rankings and reviews are based solely on our evaluation criteria.
              Affiliate relationships never influence our ratings or
              recommendations.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function MedicalTeamPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-cloud via-white to-cloud py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-midnight leading-tight mb-6">
              Our Medical Team
            </h1>
            <p className="text-lg text-slate">
              Every piece of medical content on our site is reviewed by
              qualified healthcare professionals.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            {medicalReviewers.map((reviewer) => (
              <MedicalReviewer
                key={reviewer._id}
                reviewer={reviewer}
                variant="full"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function EditorialStandardsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-cloud via-white to-cloud py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-midnight leading-tight mb-6">
              Editorial Standards
            </h1>
            <p className="text-lg text-slate">
              Our commitment to accuracy, transparency, and editorial
              independence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-slate">
            <h2>Our Principles</h2>

            <h3>Accuracy</h3>
            <p>
              All claims are fact-checked and sourced. Medical information is
              reviewed by qualified healthcare professionals. We correct errors
              promptly and transparently.
            </p>

            <h3>Independence</h3>
            <p>
              Our editorial content is never influenced by affiliate
              relationships, advertising, or provider partnerships. Rankings
              and recommendations are based solely on our evaluation criteria.
            </p>

            <h3>Transparency</h3>
            <p>
              We clearly disclose our affiliate relationships and how we make
              money. We explain our methodology and update content with revision
              dates.
            </p>

            <h3>Medical Review</h3>
            <p>
              All medical content is reviewed by healthcare professionals before
              publication. We include medical disclaimers and encourage readers
              to consult with their own healthcare providers.
            </p>

            <h3>Updates</h3>
            <p>
              We regularly review and update our content to ensure accuracy. FDA
              regulatory changes and pricing updates are reflected promptly.
            </p>

            <h2>Corrections Policy</h2>
            <p>
              If we make an error, we correct it promptly and note the
              correction on the page. For significant errors, we may issue a
              separate correction notice.
            </p>

            <h2>Contact</h2>
            <p>
              Have a question or concern about our content? Contact us at{" "}
              <a href="mailto:editorial@affordableglp-1.com">
                editorial@affordableglp-1.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
