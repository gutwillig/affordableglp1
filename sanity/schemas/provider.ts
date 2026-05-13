import { defineField, defineType } from "sanity";

export const provider = defineType({
  name: "provider",
  title: "Provider",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Provider Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "oneLineVerdict",
      title: "One-Line Verdict",
      type: "string",
      description: "A single sentence summary (for AEO optimization)",
    }),
    defineField({
      name: "medications",
      title: "Available Medications",
      type: "array",
      of: [{ type: "reference", to: [{ type: "medication" }] }],
    }),
    defineField({
      name: "pharmacyType",
      title: "Pharmacy Type",
      type: "string",
      options: {
        list: [
          { title: "In-house", value: "in-house" },
          { title: "Partner 503B", value: "partner-503b" },
          { title: "Retail Pharmacy", value: "retail" },
          { title: "Hybrid", value: "hybrid" },
        ],
      },
    }),
    defineField({
      name: "states",
      title: "Available States",
      type: "array",
      of: [{ type: "string" }],
      description: "US states where the provider operates",
    }),
    defineField({
      name: "fdaStatus",
      title: "FDA Status",
      type: "string",
      options: {
        list: [
          { title: "FDA Approved Only", value: "approved" },
          { title: "Compounded (503B)", value: "compounded" },
          { title: "Both Available", value: "both" },
        ],
      },
    }),
    defineField({
      name: "affiliateUrl",
      title: "Affiliate URL",
      type: "url",
    }),
    defineField({
      name: "affiliateDisclosure",
      title: "Affiliate Disclosure Note",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "scores",
      title: "Scores",
      type: "object",
      fields: [
        defineField({
          name: "overall",
          title: "Overall Score",
          type: "number",
          validation: (Rule) => Rule.min(0).max(100),
        }),
        defineField({
          name: "pricing",
          title: "Pricing Score",
          type: "number",
          validation: (Rule) => Rule.min(0).max(100),
        }),
        defineField({
          name: "medicalQuality",
          title: "Medical Quality Score",
          type: "number",
          validation: (Rule) => Rule.min(0).max(100),
        }),
        defineField({
          name: "userExperience",
          title: "User Experience Score",
          type: "number",
          validation: (Rule) => Rule.min(0).max(100),
        }),
        defineField({
          name: "customerSupport",
          title: "Customer Support Score",
          type: "number",
          validation: (Rule) => Rule.min(0).max(100),
        }),
      ],
    }),
    defineField({
      name: "pricing",
      title: "Pricing",
      type: "object",
      fields: [
        defineField({
          name: "startingPrice",
          title: "Starting Monthly Price",
          type: "number",
        }),
        defineField({
          name: "consultationFee",
          title: "Consultation Fee",
          type: "number",
        }),
        defineField({
          name: "shippingFee",
          title: "Shipping Fee",
          type: "number",
        }),
        defineField({
          name: "priceDisclaimer",
          title: "Price Disclaimer",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "pros",
      title: "Pros",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "cons",
      title: "Cons",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "whoItsFor",
      title: "Who It's For",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "whoItsNotFor",
      title: "Who It's Not For",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "intakeProcess",
      title: "Intake Process Description",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "targetAudiences",
      title: "Target Audiences",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Women", value: "women" },
          { title: "Men", value: "men" },
          { title: "Brand-Name Seekers", value: "brand-name" },
          { title: "Budget Conscious", value: "budget" },
        ],
      },
    }),
    defineField({
      name: "featured",
      title: "Featured Provider",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "lastUpdated",
      title: "Last Updated",
      type: "datetime",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "oneLineVerdict",
      media: "logo",
    },
  },
});
