import { defineField, defineType } from "sanity";

export const medication = defineType({
  name: "medication",
  title: "Medication",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Medication Name",
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
      name: "activeIngredient",
      title: "Active Ingredient",
      type: "string",
      options: {
        list: [
          { title: "Semaglutide", value: "semaglutide" },
          { title: "Tirzepatide", value: "tirzepatide" },
        ],
      },
    }),
    defineField({
      name: "brandNames",
      title: "Brand Names",
      type: "array",
      of: [{ type: "string" }],
      description: "e.g., Wegovy, Ozempic for semaglutide",
    }),
    defineField({
      name: "fdaStatus",
      title: "FDA Status",
      type: "string",
      options: {
        list: [
          { title: "FDA Approved for Weight Loss", value: "approved-weight" },
          { title: "FDA Approved for Diabetes", value: "approved-diabetes" },
          { title: "Compounded", value: "compounded" },
        ],
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "oneLineDefinition",
      title: "One-Line Definition",
      type: "string",
      description: "AEO-optimized single sentence definition",
    }),
    defineField({
      name: "howItWorks",
      title: "How It Works",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "effectiveness",
      title: "Effectiveness Data",
      type: "object",
      fields: [
        defineField({
          name: "averageWeightLoss",
          title: "Average Weight Loss %",
          type: "string",
        }),
        defineField({
          name: "clinicalTrials",
          title: "Clinical Trial Notes",
          type: "text",
        }),
        defineField({
          name: "citations",
          title: "Citations",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "title", type: "string", title: "Citation Title" },
                { name: "url", type: "url", title: "Citation URL" },
                { name: "source", type: "string", title: "Source" },
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: "costRange",
      title: "Cost Range",
      type: "object",
      fields: [
        defineField({
          name: "brandMin",
          title: "Brand Name Min ($/month)",
          type: "number",
        }),
        defineField({
          name: "brandMax",
          title: "Brand Name Max ($/month)",
          type: "number",
        }),
        defineField({
          name: "compoundedMin",
          title: "Compounded Min ($/month)",
          type: "number",
        }),
        defineField({
          name: "compoundedMax",
          title: "Compounded Max ($/month)",
          type: "number",
        }),
      ],
    }),
    defineField({
      name: "sideEffects",
      title: "Side Effects",
      type: "object",
      fields: [
        defineField({
          name: "common",
          title: "Common Side Effects",
          type: "array",
          of: [{ type: "string" }],
        }),
        defineField({
          name: "serious",
          title: "Serious Side Effects",
          type: "array",
          of: [{ type: "string" }],
        }),
        defineField({
          name: "disclaimer",
          title: "Side Effects Disclaimer",
          type: "text",
        }),
      ],
    }),
    defineField({
      name: "dosing",
      title: "Dosing Information",
      type: "object",
      fields: [
        defineField({
          name: "frequency",
          title: "Dosing Frequency",
          type: "string",
        }),
        defineField({
          name: "titrationSchedule",
          title: "Titration Schedule",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "week", type: "string", title: "Week/Period" },
                { name: "dose", type: "string", title: "Dose" },
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: "administrationMethod",
      title: "Administration Method",
      type: "string",
      options: {
        list: [
          { title: "Subcutaneous Injection", value: "injection" },
          { title: "Oral", value: "oral" },
        ],
      },
    }),
    defineField({
      name: "image",
      title: "Medication Image",
      type: "image",
      options: {
        hotspot: true,
      },
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
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "activeIngredient",
      media: "image",
    },
  },
});
