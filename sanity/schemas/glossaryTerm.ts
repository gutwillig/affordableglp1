import { defineField, defineType } from "sanity";

export const glossaryTerm = defineType({
  name: "glossaryTerm",
  title: "Glossary Term",
  type: "document",
  fields: [
    defineField({
      name: "term",
      title: "Term",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "term",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "definition",
      title: "Definition",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "shortDefinition",
      title: "Short Definition",
      type: "string",
      description: "One-sentence definition for tooltips and previews",
    }),
    defineField({
      name: "relatedTerms",
      title: "Related Terms",
      type: "array",
      of: [{ type: "reference", to: [{ type: "glossaryTerm" }] }],
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Medications", value: "medications" },
          { title: "Medical Terms", value: "medical" },
          { title: "Regulatory", value: "regulatory" },
          { title: "Insurance", value: "insurance" },
          { title: "Side Effects", value: "side-effects" },
        ],
      },
    }),
  ],
  orderings: [
    {
      title: "Term A-Z",
      name: "termAsc",
      by: [{ field: "term", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "term",
      subtitle: "shortDefinition",
    },
  },
});
