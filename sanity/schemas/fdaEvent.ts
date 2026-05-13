import { defineField, defineType } from "sanity";

export const fdaEvent = defineType({
  name: "fdaEvent",
  title: "FDA Event",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Event Title",
      type: "string",
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
    }),
    defineField({
      name: "date",
      title: "Event Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "eventType",
      title: "Event Type",
      type: "string",
      options: {
        list: [
          { title: "FDA Approval", value: "approval" },
          { title: "Warning Letter", value: "warning-letter" },
          { title: "503B Update", value: "503b-update" },
          { title: "Recall", value: "recall" },
          { title: "Litigation", value: "litigation" },
          { title: "Guidance Update", value: "guidance" },
          { title: "Shortage Declaration", value: "shortage" },
          { title: "Shortage Resolution", value: "shortage-resolution" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "severity",
      title: "Severity",
      type: "string",
      options: {
        list: [
          { title: "Informational", value: "info" },
          { title: "Caution", value: "caution" },
          { title: "Warning", value: "warning" },
          { title: "Critical", value: "critical" },
        ],
      },
    }),
    defineField({
      name: "affectedParties",
      title: "Affected Parties",
      type: "array",
      of: [{ type: "reference", to: [{ type: "provider" }, { type: "medication" }] }],
    }),
    defineField({
      name: "affectedMedications",
      title: "Affected Medications (text)",
      type: "array",
      of: [{ type: "string" }],
      description: "For medications not in the system",
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "plainLanguageExplainer",
      title: "Plain Language Explainer",
      type: "array",
      of: [{ type: "block" }],
      description: "What this means for consumers",
    }),
    defineField({
      name: "sourceUrl",
      title: "Source URL",
      type: "url",
    }),
    defineField({
      name: "sourceName",
      title: "Source Name",
      type: "string",
      description: "e.g., FDA.gov, Reuters",
    }),
    defineField({
      name: "documentUrl",
      title: "Document URL",
      type: "url",
      description: "Link to official document if available",
    }),
    defineField({
      name: "status",
      title: "Current Status",
      type: "string",
      options: {
        list: [
          { title: "Active", value: "active" },
          { title: "Resolved", value: "resolved" },
          { title: "Ongoing", value: "ongoing" },
          { title: "Under Review", value: "under-review" },
        ],
      },
    }),
    defineField({
      name: "relatedEvents",
      title: "Related Events",
      type: "array",
      of: [{ type: "reference", to: [{ type: "fdaEvent" }] }],
    }),
  ],
  orderings: [
    {
      title: "Date, Newest",
      name: "dateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      date: "date",
      eventType: "eventType",
    },
    prepare({ title, date, eventType }) {
      return {
        title,
        subtitle: `${eventType} - ${date}`,
      };
    },
  },
});
