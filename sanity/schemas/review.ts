import { defineField, defineType } from "sanity";

export const review = defineType({
  name: "review",
  title: "Provider Review",
  type: "document",
  fields: [
    defineField({
      name: "provider",
      title: "Provider",
      type: "reference",
      to: [{ type: "provider" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Review Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "verdict",
      title: "Verdict Summary",
      type: "text",
      rows: 3,
      description: "One paragraph summary for AEO optimization",
    }),
    defineField({
      name: "pricingBreakdown",
      title: "Pricing Breakdown",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "item", type: "string", title: "Item" },
            { name: "price", type: "string", title: "Price" },
            { name: "note", type: "string", title: "Note" },
          ],
        },
      ],
    }),
    defineField({
      name: "intakeExperience",
      title: "Intake Experience",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "pharmacyQuality",
      title: "Pharmacy & Clinical Quality",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "regulatoryStanding",
      title: "FDA & Regulatory Standing",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "pros",
      title: "Detailed Pros",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string", title: "Pro Title" },
            { name: "description", type: "text", title: "Description" },
          ],
        },
      ],
    }),
    defineField({
      name: "cons",
      title: "Detailed Cons",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string", title: "Con Title" },
            { name: "description", type: "text", title: "Description" },
          ],
        },
      ],
    }),
    defineField({
      name: "alternatives",
      title: "Alternatives",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "provider",
              type: "reference",
              to: [{ type: "provider" }],
              title: "Alternative Provider",
            },
            { name: "reason", type: "string", title: "Why Consider" },
          ],
        },
      ],
    }),
    defineField({
      name: "faq",
      title: "FAQ",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "question", type: "string", title: "Question" },
            { name: "answer", type: "text", title: "Answer" },
          ],
        },
      ],
    }),
    defineField({
      name: "medicalReviewer",
      title: "Medical Reviewer",
      type: "reference",
      to: [{ type: "medicalReviewer" }],
    }),
    defineField({
      name: "lastUpdated",
      title: "Last Updated",
      type: "datetime",
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
    }),
  ],
  preview: {
    select: {
      title: "title",
      providerName: "provider.name",
    },
    prepare({ title, providerName }) {
      return {
        title: title || `Review of ${providerName}`,
        subtitle: providerName,
      };
    },
  },
});
