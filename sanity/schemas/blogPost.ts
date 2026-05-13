import { defineField, defineType } from "sanity";

export const blogPost = defineType({
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "dek",
      title: "Dek (Subtitle)",
      type: "text",
      rows: 2,
      description: "A brief description that appears below the title",
    }),
    defineField({
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alt Text",
        },
        {
          name: "caption",
          type: "string",
          title: "Caption",
        },
      ],
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
    }),
    defineField({
      name: "medicalReviewer",
      title: "Medical Reviewer",
      type: "reference",
      to: [{ type: "medicalReviewer" }],
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Guides", value: "guides" },
          { title: "News", value: "news" },
          { title: "Research", value: "research" },
          { title: "Tips", value: "tips" },
          { title: "Comparisons", value: "comparisons" },
          { title: "Side Effects", value: "side-effects" },
          { title: "Cost & Insurance", value: "cost-insurance" },
        ],
      },
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            { name: "alt", type: "string", title: "Alt Text" },
            { name: "caption", type: "string", title: "Caption" },
          ],
        },
        {
          type: "object",
          name: "providerCallout",
          title: "Provider Callout",
          fields: [
            {
              name: "provider",
              type: "reference",
              to: [{ type: "provider" }],
              title: "Provider",
            },
            {
              name: "calloutType",
              type: "string",
              title: "Callout Type",
              options: {
                list: [
                  { title: "Recommendation", value: "recommendation" },
                  { title: "Mention", value: "mention" },
                  { title: "Comparison", value: "comparison" },
                ],
              },
            },
          ],
          preview: {
            select: {
              providerName: "provider.name",
              calloutType: "calloutType",
            },
            prepare({ providerName, calloutType }) {
              return {
                title: `Provider: ${providerName}`,
                subtitle: calloutType,
              };
            },
          },
        },
        {
          type: "object",
          name: "calloutBox",
          title: "Callout Box",
          fields: [
            {
              name: "type",
              type: "string",
              title: "Type",
              options: {
                list: [
                  { title: "Info", value: "info" },
                  { title: "Warning", value: "warning" },
                  { title: "Tip", value: "tip" },
                  { title: "Medical", value: "medical" },
                ],
              },
            },
            { name: "title", type: "string", title: "Title" },
            { name: "content", type: "text", title: "Content" },
          ],
        },
        {
          type: "object",
          name: "tableOfContents",
          title: "Table of Contents Placeholder",
          fields: [
            {
              name: "placeholder",
              type: "boolean",
              title: "Auto-generate TOC",
              initialValue: true,
            },
          ],
        },
      ],
    }),
    defineField({
      name: "relatedProviders",
      title: "Related Providers",
      type: "array",
      of: [{ type: "reference", to: [{ type: "provider" }] }],
    }),
    defineField({
      name: "relatedPosts",
      title: "Related Posts",
      type: "array",
      of: [{ type: "reference", to: [{ type: "blogPost" }] }],
    }),
    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
      description: "Override the default title for SEO purposes",
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
    }),
    defineField({
      name: "updatedAt",
      title: "Last Updated",
      type: "datetime",
    }),
    defineField({
      name: "featured",
      title: "Featured Post",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "featuredImage",
      category: "category",
    },
    prepare({ title, author, media, category }) {
      return {
        title,
        subtitle: `${category ? category + " | " : ""}${author || "No author"}`,
        media,
      };
    },
  },
});
