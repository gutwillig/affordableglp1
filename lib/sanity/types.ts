import type { PortableTextBlock, Slug, Image as SanityImage } from "sanity";

// Base types
export interface SanityDocument {
  _id: string;
  _type: string;
  _createdAt?: string;
  _updatedAt?: string;
}

export interface ImageWithAlt extends SanityImage {
  alt?: string;
  caption?: string;
}

// Provider types
export interface Provider extends SanityDocument {
  name: string;
  slug: Slug;
  logo?: SanityImage;
  description?: string;
  oneLineVerdict?: string;
  medications?: Medication[];
  pharmacyType?: "in-house" | "partner-503b" | "retail" | "hybrid";
  states?: string[];
  fdaStatus?: "approved" | "compounded" | "both";
  affiliateUrl?: string;
  affiliateDisclosure?: string;
  scores?: ProviderScores;
  pricing?: ProviderPricing;
  pros?: string[];
  cons?: string[];
  whoItsFor?: string[];
  whoItsNotFor?: string[];
  intakeProcess?: PortableTextBlock[];
  targetAudiences?: ("women" | "men" | "brand-name" | "budget")[];
  featured?: boolean;
  lastUpdated?: string;
}

export interface ProviderScores {
  overall?: number;
  pricing?: number;
  medicalQuality?: number;
  userExperience?: number;
  customerSupport?: number;
}

export interface ProviderPricing {
  startingPrice?: number;
  consultationFee?: number;
  shippingFee?: number;
  priceDisclaimer?: string;
}

// Medication types
export interface Medication extends SanityDocument {
  name: string;
  slug: Slug;
  activeIngredient?: "semaglutide" | "tirzepatide";
  brandNames?: string[];
  fdaStatus?: "approved-weight" | "approved-diabetes" | "compounded";
  description?: string;
  oneLineDefinition?: string;
  howItWorks?: PortableTextBlock[];
  effectiveness?: MedicationEffectiveness;
  costRange?: MedicationCostRange;
  sideEffects?: MedicationSideEffects;
  dosing?: MedicationDosing;
  administrationMethod?: "injection" | "oral";
  image?: SanityImage;
  faq?: FAQ[];
}

export interface MedicationEffectiveness {
  averageWeightLoss?: string;
  clinicalTrials?: string;
  citations?: Citation[];
}

export interface Citation {
  title: string;
  url: string;
  source: string;
}

export interface MedicationCostRange {
  brandMin?: number;
  brandMax?: number;
  compoundedMin?: number;
  compoundedMax?: number;
}

export interface MedicationSideEffects {
  common?: string[];
  serious?: string[];
  disclaimer?: string;
}

export interface MedicationDosing {
  frequency?: string;
  titrationSchedule?: { week: string; dose: string }[];
}

// Review types
export interface Review extends SanityDocument {
  provider?: Provider;
  title?: string;
  slug?: Slug;
  verdict?: string;
  pricingBreakdown?: PricingItem[];
  intakeExperience?: PortableTextBlock[];
  pharmacyQuality?: PortableTextBlock[];
  regulatoryStanding?: PortableTextBlock[];
  pros?: DetailedProCon[];
  cons?: DetailedProCon[];
  alternatives?: Alternative[];
  faq?: FAQ[];
  medicalReviewer?: MedicalReviewer;
  lastUpdated?: string;
  publishedAt?: string;
}

export interface PricingItem {
  item: string;
  price: string;
  note?: string;
}

export interface DetailedProCon {
  title: string;
  description: string;
}

export interface Alternative {
  provider: Provider;
  reason: string;
}

// Comparison types
export interface Comparison extends SanityDocument {
  title: string;
  slug: Slug;
  providerA?: Provider;
  providerB?: Provider;
  verdictSummary?: string;
  winner?: "providerA" | "providerB" | "tie";
  comparisonTable?: ComparisonRow[];
  whenAWins?: string[];
  whenBWins?: string[];
  detailedComparison?: PortableTextBlock[];
  faq?: FAQ[];
  medicalReviewer?: MedicalReviewer;
  lastUpdated?: string;
  publishedAt?: string;
}

export interface ComparisonRow {
  category: string;
  providerAValue: string;
  providerBValue: string;
  winner?: "providerA" | "providerB" | "tie";
}

// Ranking types
export interface Ranking extends SanityDocument {
  title: string;
  slug: Slug;
  category?: string;
  description?: string;
  methodology?: PortableTextBlock[];
  providers?: RankedProvider[];
  filterState?: string;
  filterMedication?: Medication;
  lastUpdated?: string;
  featured?: boolean;
}

export interface RankedProvider {
  provider: Provider;
  position: number;
  badge?: string;
  highlight?: string;
}

// Blog types
export interface BlogPost extends SanityDocument {
  title: string;
  slug: Slug;
  dek?: string;
  featuredImage?: ImageWithAlt;
  author?: Author;
  medicalReviewer?: MedicalReviewer;
  category?: string;
  tags?: string[];
  body?: PortableTextBlock[];
  relatedProviders?: Provider[];
  relatedPosts?: BlogPost[];
  seoTitle?: string;
  seoDescription?: string;
  publishedAt?: string;
  updatedAt?: string;
  featured?: boolean;
}

// Author types
export interface Author extends SanityDocument {
  name: string;
  slug: Slug;
  avatar?: SanityImage;
  bio?: PortableTextBlock[];
  shortBio?: string;
  role?: string;
  twitter?: string;
  linkedIn?: string;
}

// Medical Reviewer types
export interface MedicalReviewer extends SanityDocument {
  name: string;
  slug: Slug;
  credentials?: string;
  title?: string;
  headshot?: SanityImage;
  bio?: PortableTextBlock[];
  shortBio?: string;
  specialties?: string[];
  education?: Education[];
  certifications?: string[];
  affiliations?: string[];
  linkedIn?: string;
  npiNumber?: string;
}

export interface Education {
  institution: string;
  degree: string;
  year?: string;
}

// FDA Event types
export interface FDAEvent extends SanityDocument {
  title: string;
  slug?: Slug;
  date: string;
  eventType: string;
  severity?: "info" | "caution" | "warning" | "critical";
  affectedParties?: (Provider | Medication)[];
  affectedMedications?: string[];
  summary?: string;
  plainLanguageExplainer?: PortableTextBlock[];
  sourceUrl?: string;
  sourceName?: string;
  documentUrl?: string;
  status?: "active" | "resolved" | "ongoing" | "under-review";
  relatedEvents?: FDAEvent[];
}

// FAQ types
export interface FAQ {
  question: string;
  answer: string | PortableTextBlock[];
}

export interface FAQEntry extends SanityDocument {
  question: string;
  answer: PortableTextBlock[];
  shortAnswer?: string;
  category?: string;
  relatedProviders?: Provider[];
  relatedMedications?: Medication[];
  order?: number;
  featured?: boolean;
}

// Glossary types
export interface GlossaryTerm extends SanityDocument {
  term: string;
  slug: Slug;
  definition: PortableTextBlock[];
  shortDefinition?: string;
  relatedTerms?: GlossaryTerm[];
  category?: string;
}

// Page types
export interface Page extends SanityDocument {
  title: string;
  slug: Slug;
  pageType?: string;
  body?: PortableTextBlock[];
  seoTitle?: string;
  seoDescription?: string;
  lastUpdated?: string;
}
