import type { Provider, Medication, MedicalReviewer, FAQ } from "@/lib/sanity/types";

// Organization Schema
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Affordable GLP-1",
    url: "https://affordableglp-1.com",
    logo: "https://affordableglp-1.com/logo.png",
    description:
      "Compare GLP-1 telehealth providers and find affordable semaglutide and tirzepatide options.",
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "hello@affordableglp-1.com",
    },
  };
}

// MedicalOrganization Schema for Providers
export function generateProviderSchema(provider: Provider) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: provider.name,
    url: `https://affordableglp-1.com/providers/${provider.slug?.current}`,
    description: provider.description || provider.oneLineVerdict,
    medicalSpecialty: "Obesity Medicine",
    areaServed: provider.states?.map((state) => ({
      "@type": "State",
      name: state,
    })),
  };
}

// Drug Schema for Medications
export function generateMedicationSchema(medication: Medication) {
  return {
    "@context": "https://schema.org",
    "@type": "Drug",
    name: medication.name,
    url: `https://affordableglp-1.com/medications/${medication.slug?.current}`,
    description: medication.description || medication.oneLineDefinition,
    activeIngredient: medication.activeIngredient,
    administrationRoute:
      medication.administrationMethod === "injection"
        ? "Subcutaneous"
        : "Oral",
    prescriptionStatus: "PrescriptionOnly",
    mechanismOfAction:
      "GLP-1 receptor agonist that regulates appetite and blood sugar",
    warning: medication.sideEffects?.disclaimer,
  };
}

// Review Schema for Provider Reviews
export function generateReviewSchema(provider: Provider) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "MedicalOrganization",
      name: provider.name,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: provider.scores?.overall || 0,
      bestRating: 100,
      worstRating: 0,
    },
    author: {
      "@type": "Organization",
      name: "Affordable GLP-1",
    },
    reviewBody: provider.oneLineVerdict,
    datePublished: provider.lastUpdated,
    publisher: {
      "@type": "Organization",
      name: "Affordable GLP-1",
    },
  };
}

// AggregateRating Schema
export function generateAggregateRatingSchema(
  provider: Provider,
  reviewCount: number = 1
) {
  return {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    itemReviewed: {
      "@type": "MedicalOrganization",
      name: provider.name,
    },
    ratingValue: provider.scores?.overall || 0,
    bestRating: 100,
    worstRating: 0,
    ratingCount: reviewCount,
  };
}

// FAQPage Schema
export function generateFAQSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: typeof faq.answer === "string" ? faq.answer : "See full answer on page.",
      },
    })),
  };
}

// Article Schema for Blog Posts
export function generateArticleSchema(post: {
  title: string;
  dek?: string;
  author?: { name: string };
  publishedAt?: string;
  updatedAt?: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.dek,
    author: {
      "@type": post.author?.name.startsWith("Dr.") ? "Person" : "Organization",
      name: post.author?.name || "Affordable GLP-1 Editorial Team",
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    publisher: {
      "@type": "Organization",
      name: "Affordable GLP-1",
      logo: {
        "@type": "ImageObject",
        url: "https://affordableglp-1.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://affordableglp-1.com/blog/${post.slug}`,
    },
  };
}

// MedicalWebPage Schema
export function generateMedicalWebPageSchema(
  title: string,
  description: string,
  lastReviewed?: string,
  reviewer?: { name: string; credentials?: string }
) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: title,
    description,
    lastReviewed,
    reviewedBy: reviewer
      ? {
          "@type": "Person",
          name: reviewer.name,
          jobTitle: reviewer.credentials,
        }
      : undefined,
    specialty: {
      "@type": "MedicalSpecialty",
      name: "Obesity Medicine",
    },
  };
}

// Person Schema for Medical Reviewers
export function generateMedicalReviewerSchema(reviewer: MedicalReviewer) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: reviewer.name,
    jobTitle: reviewer.title,
    description: reviewer.shortBio,
    url: `https://affordableglp-1.com/about/medical-team/${reviewer.slug?.current}`,
    sameAs: reviewer.linkedIn ? [reviewer.linkedIn] : [],
    hasCredential: reviewer.certifications?.map((cert) => ({
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certification",
      name: cert,
    })),
  };
}

// BreadcrumbList Schema
export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://affordableglp-1.com${item.url}`,
    })),
  };
}

// HowTo Schema for Calculator/Guides
export function generateHowToSchema(
  name: string,
  description: string,
  steps: { name: string; text: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

// Comparison Schema (using ItemList)
export function generateComparisonSchema(
  title: string,
  providers: { name: string; score: number; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: title,
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    numberOfItems: providers.length,
    itemListElement: providers.map((provider, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "MedicalOrganization",
        name: provider.name,
        url: `https://affordableglp-1.com${provider.url}`,
      },
    })),
  };
}
