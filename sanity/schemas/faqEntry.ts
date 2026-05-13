import { defineField, defineType } from "sanity";

export const faqEntry = defineType({
  name: "faqEntry",
  title: "FAQ Entry",
  type: "document",
  fields: [
    defineField({
      name: "question",
      title: "Question",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "answer",
      title: "Answer",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "shortAnswer",
      title: "Short Answer",
      type: "text",
      rows: 2,
      description: "Brief answer for schema markup",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "General", value: "general" },
          { title: "Medications", value: "medications" },
          { title: "Providers", value: "providers" },
          { title: "Side Effects", value: "side-effects" },
          { title: "Cost & Insurance", value: "cost-insurance" },
          { title: "Eligibility", value: "eligibility" },
          { title: "Process", value: "process" },
        ],
      },
    }),
    defineField({
      name: "relatedProviders",
      title: "Related Providers",
      type: "array",
      of: [{ type: "reference", to: [{ type: "provider" }] }],
    }),
    defineField({
      name: "relatedMedications",
      title: "Related Medications",
      type: "array",
      of: [{ type: "reference", to: [{ type: "medication" }] }],
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    }),
    defineField({
      name: "featured",
      title: "Featured FAQ",
      type: "boolean",
      initialValue: false,
    }),
  ],
  orderings: [
    {
      title: "Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "question",
      subtitle: "category",
    },
  },
});
