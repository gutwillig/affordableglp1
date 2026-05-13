import { defineField, defineType } from "sanity";

export const ranking = defineType({
  name: "ranking",
  title: "Provider Ranking",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Ranking Title",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: "e.g., 'Best GLP-1 Providers 2026', 'Cheapest Semaglutide Providers'",
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
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Overall Best", value: "overall" },
          { title: "Cheapest", value: "cheapest" },
          { title: "Brand-Name Only", value: "brand-name" },
          { title: "Best for Women", value: "women" },
          { title: "Best for Men", value: "men" },
          { title: "By Medication", value: "medication" },
          { title: "By State", value: "state" },
        ],
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "methodology",
      title: "Methodology",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "providers",
      title: "Ranked Providers",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "provider",
              type: "reference",
              to: [{ type: "provider" }],
              title: "Provider",
            },
            {
              name: "position",
              type: "number",
              title: "Position",
              validation: (Rule) => Rule.min(1),
            },
            {
              name: "badge",
              type: "string",
              title: "Badge",
              options: {
                list: [
                  { title: "Best Overall", value: "best-overall" },
                  { title: "Best Value", value: "best-value" },
                  { title: "Editor's Choice", value: "editors-choice" },
                  { title: "Most Popular", value: "most-popular" },
                  { title: "Best for Beginners", value: "best-beginners" },
                ],
              },
            },
            {
              name: "highlight",
              type: "string",
              title: "Highlight Note",
              description: "Brief reason for this position",
            },
          ],
          preview: {
            select: {
              providerName: "provider.name",
              position: "position",
              badge: "badge",
            },
            prepare({ providerName, position, badge }) {
              return {
                title: `#${position}: ${providerName}`,
                subtitle: badge,
              };
            },
          },
        },
      ],
    }),
    defineField({
      name: "filterState",
      title: "Filter by State",
      type: "string",
      description: "If this is a state-specific ranking",
    }),
    defineField({
      name: "filterMedication",
      title: "Filter by Medication",
      type: "reference",
      to: [{ type: "medication" }],
      description: "If this is a medication-specific ranking",
    }),
    defineField({
      name: "lastUpdated",
      title: "Last Updated",
      type: "datetime",
    }),
    defineField({
      name: "featured",
      title: "Featured Ranking",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "title",
      category: "category",
    },
    prepare({ title, category }) {
      return {
        title,
        subtitle: category,
      };
    },
  },
});
