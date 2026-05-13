import { defineField, defineType } from "sanity";

export const comparison = defineType({
  name: "comparison",
  title: "Provider Comparison",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "e.g., 'Hims vs Ro: Which GLP-1 Provider is Better in 2026?'",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "providerA",
      title: "Provider A",
      type: "reference",
      to: [{ type: "provider" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "providerB",
      title: "Provider B",
      type: "reference",
      to: [{ type: "provider" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "verdictSummary",
      title: "Verdict Summary",
      type: "text",
      rows: 4,
      description: "One paragraph AEO-optimized verdict",
    }),
    defineField({
      name: "winner",
      title: "Overall Winner",
      type: "string",
      options: {
        list: [
          { title: "Provider A", value: "providerA" },
          { title: "Provider B", value: "providerB" },
          { title: "Tie/Depends", value: "tie" },
        ],
      },
    }),
    defineField({
      name: "comparisonTable",
      title: "Comparison Table",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "category", type: "string", title: "Category" },
            { name: "providerAValue", type: "string", title: "Provider A Value" },
            { name: "providerBValue", type: "string", title: "Provider B Value" },
            {
              name: "winner",
              type: "string",
              title: "Category Winner",
              options: {
                list: [
                  { title: "Provider A", value: "providerA" },
                  { title: "Provider B", value: "providerB" },
                  { title: "Tie", value: "tie" },
                ],
              },
            },
          ],
        },
      ],
    }),
    defineField({
      name: "whenAWins",
      title: "When Provider A Wins",
      type: "array",
      of: [{ type: "string" }],
      description: "Scenarios where Provider A is the better choice",
    }),
    defineField({
      name: "whenBWins",
      title: "When Provider B Wins",
      type: "array",
      of: [{ type: "string" }],
      description: "Scenarios where Provider B is the better choice",
    }),
    defineField({
      name: "detailedComparison",
      title: "Detailed Comparison",
      type: "array",
      of: [{ type: "block" }],
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
      providerAName: "providerA.name",
      providerBName: "providerB.name",
    },
    prepare({ title, providerAName, providerBName }) {
      return {
        title: title || `${providerAName} vs ${providerBName}`,
        subtitle: `${providerAName} vs ${providerBName}`,
      };
    },
  },
});
