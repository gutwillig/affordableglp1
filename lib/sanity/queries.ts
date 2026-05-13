import { groq } from "next-sanity";

// Provider queries
export const providersQuery = groq`
  *[_type == "provider"] | order(scores.overall desc) {
    _id,
    name,
    slug,
    logo,
    description,
    oneLineVerdict,
    fdaStatus,
    scores,
    pricing,
    pros,
    cons,
    targetAudiences,
    featured,
    lastUpdated
  }
`;

export const providerBySlugQuery = groq`
  *[_type == "provider" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    logo,
    description,
    oneLineVerdict,
    "medications": medications[]->{ _id, name, slug, activeIngredient },
    pharmacyType,
    states,
    fdaStatus,
    affiliateUrl,
    affiliateDisclosure,
    scores,
    pricing,
    pros,
    cons,
    whoItsFor,
    whoItsNotFor,
    intakeProcess,
    targetAudiences,
    featured,
    lastUpdated
  }
`;

export const featuredProvidersQuery = groq`
  *[_type == "provider" && featured == true] | order(scores.overall desc) [0...5] {
    _id,
    name,
    slug,
    logo,
    oneLineVerdict,
    scores,
    pricing,
    pros[0...3],
    fdaStatus
  }
`;

// Medication queries
export const medicationsQuery = groq`
  *[_type == "medication"] | order(name asc) {
    _id,
    name,
    slug,
    activeIngredient,
    brandNames,
    fdaStatus,
    oneLineDefinition,
    costRange,
    image
  }
`;

export const medicationBySlugQuery = groq`
  *[_type == "medication" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    activeIngredient,
    brandNames,
    fdaStatus,
    description,
    oneLineDefinition,
    howItWorks,
    effectiveness,
    costRange,
    sideEffects,
    dosing,
    administrationMethod,
    image,
    faq
  }
`;

// Review queries
export const reviewByProviderSlugQuery = groq`
  *[_type == "review" && provider->slug.current == $slug][0] {
    _id,
    title,
    slug,
    verdict,
    pricingBreakdown,
    intakeExperience,
    pharmacyQuality,
    regulatoryStanding,
    pros,
    cons,
    "alternatives": alternatives[]{
      "provider": provider->{_id, name, slug, logo, scores},
      reason
    },
    faq,
    "medicalReviewer": medicalReviewer->{name, credentials, headshot, shortBio},
    lastUpdated,
    publishedAt,
    "provider": provider->{
      _id,
      name,
      slug,
      logo,
      oneLineVerdict,
      scores,
      pricing,
      affiliateUrl
    }
  }
`;

// Comparison queries
export const comparisonsQuery = groq`
  *[_type == "comparison"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    verdictSummary,
    winner,
    "providerA": providerA->{_id, name, slug, logo, scores},
    "providerB": providerB->{_id, name, slug, logo, scores},
    lastUpdated
  }
`;

export const comparisonBySlugQuery = groq`
  *[_type == "comparison" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    verdictSummary,
    winner,
    comparisonTable,
    whenAWins,
    whenBWins,
    detailedComparison,
    faq,
    "medicalReviewer": medicalReviewer->{name, credentials, headshot, shortBio},
    lastUpdated,
    publishedAt,
    "providerA": providerA->{
      _id,
      name,
      slug,
      logo,
      oneLineVerdict,
      scores,
      pricing,
      pros,
      cons,
      affiliateUrl
    },
    "providerB": providerB->{
      _id,
      name,
      slug,
      logo,
      oneLineVerdict,
      scores,
      pricing,
      pros,
      cons,
      affiliateUrl
    }
  }
`;

// Ranking queries
export const rankingsQuery = groq`
  *[_type == "ranking"] | order(featured desc, lastUpdated desc) {
    _id,
    title,
    slug,
    category,
    description,
    featured,
    lastUpdated
  }
`;

export const rankingBySlugQuery = groq`
  *[_type == "ranking" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    category,
    description,
    methodology,
    "providers": providers[]{
      position,
      badge,
      highlight,
      "provider": provider->{
        _id,
        name,
        slug,
        logo,
        oneLineVerdict,
        scores,
        pricing,
        pros[0...3],
        fdaStatus,
        affiliateUrl
      }
    } | order(position asc),
    filterState,
    "filterMedication": filterMedication->{_id, name, slug},
    lastUpdated
  }
`;

// Blog queries
export const blogPostsQuery = groq`
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    dek,
    featuredImage,
    "author": author->{name, avatar},
    category,
    tags,
    publishedAt,
    updatedAt,
    featured
  }
`;

export const blogPostBySlugQuery = groq`
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    dek,
    featuredImage,
    "author": author->{name, slug, avatar, shortBio},
    "medicalReviewer": medicalReviewer->{name, credentials, headshot, shortBio},
    category,
    tags,
    body[]{
      ...,
      _type == "providerCallout" => {
        ...,
        "provider": provider->{_id, name, slug, logo, scores, pricing, affiliateUrl}
      }
    },
    "relatedProviders": relatedProviders[]->{_id, name, slug, logo, scores},
    "relatedPosts": relatedPosts[]->{_id, title, slug, featuredImage, category, publishedAt},
    seoTitle,
    seoDescription,
    publishedAt,
    updatedAt
  }
`;

export const featuredBlogPostsQuery = groq`
  *[_type == "blogPost" && featured == true] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    dek,
    featuredImage,
    "author": author->{name, avatar},
    category,
    publishedAt
  }
`;

export const blogPostsByCategoryQuery = groq`
  *[_type == "blogPost" && category == $category] | order(publishedAt desc) {
    _id,
    title,
    slug,
    dek,
    featuredImage,
    "author": author->{name, avatar},
    category,
    publishedAt
  }
`;

// FDA Event queries
export const fdaEventsQuery = groq`
  *[_type == "fdaEvent"] | order(date desc) {
    _id,
    title,
    slug,
    date,
    eventType,
    severity,
    summary,
    status,
    sourceName,
    sourceUrl
  }
`;

export const fdaEventsByTypeQuery = groq`
  *[_type == "fdaEvent" && eventType == $eventType] | order(date desc) {
    _id,
    title,
    slug,
    date,
    eventType,
    severity,
    summary,
    status
  }
`;

export const activeFdaEventsQuery = groq`
  *[_type == "fdaEvent" && status in ["active", "ongoing"]] | order(date desc) {
    _id,
    title,
    date,
    eventType,
    severity,
    summary,
    "affectedProviders": affectedParties[_type == "reference" && references(*[_type == "provider"])]->{name, slug}
  }
`;

// FAQ queries
export const faqEntriesQuery = groq`
  *[_type == "faqEntry"] | order(order asc, _createdAt asc) {
    _id,
    question,
    answer,
    shortAnswer,
    category,
    featured
  }
`;

export const faqEntriesByCategoryQuery = groq`
  *[_type == "faqEntry" && category == $category] | order(order asc) {
    _id,
    question,
    answer,
    shortAnswer,
    category
  }
`;

export const featuredFaqEntriesQuery = groq`
  *[_type == "faqEntry" && featured == true] | order(order asc) [0...10] {
    _id,
    question,
    shortAnswer
  }
`;

// Glossary queries
export const glossaryTermsQuery = groq`
  *[_type == "glossaryTerm"] | order(term asc) {
    _id,
    term,
    slug,
    shortDefinition,
    category
  }
`;

export const glossaryTermBySlugQuery = groq`
  *[_type == "glossaryTerm" && slug.current == $slug][0] {
    _id,
    term,
    slug,
    definition,
    shortDefinition,
    "relatedTerms": relatedTerms[]->{_id, term, slug, shortDefinition},
    category
  }
`;

// Page queries
export const pageBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    pageType,
    body,
    seoTitle,
    seoDescription,
    lastUpdated
  }
`;

// Medical Reviewer queries
export const medicalReviewersQuery = groq`
  *[_type == "medicalReviewer"] | order(name asc) {
    _id,
    name,
    slug,
    credentials,
    title,
    headshot,
    shortBio,
    specialties
  }
`;

export const medicalReviewerBySlugQuery = groq`
  *[_type == "medicalReviewer" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    credentials,
    title,
    headshot,
    bio,
    shortBio,
    specialties,
    education,
    certifications,
    affiliations,
    linkedIn,
    npiNumber
  }
`;

// Providers by audience
export const providersByAudienceQuery = groq`
  *[_type == "provider" && $audience in targetAudiences] | order(scores.overall desc) {
    _id,
    name,
    slug,
    logo,
    oneLineVerdict,
    scores,
    pricing,
    pros[0...3],
    fdaStatus
  }
`;

// Providers by medication
export const providersByMedicationQuery = groq`
  *[_type == "provider" && references(*[_type == "medication" && slug.current == $medicationSlug]._id)] | order(scores.overall desc) {
    _id,
    name,
    slug,
    logo,
    oneLineVerdict,
    scores,
    pricing,
    fdaStatus
  }
`;
