import { defineField, defineType } from "sanity";

export const author = defineType({
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
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
      name: "avatar",
      title: "Avatar",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "shortBio",
      title: "Short Bio",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
      description: "e.g., Senior Health Writer, Editor",
    }),
    defineField({
      name: "twitter",
      title: "Twitter Handle",
      type: "string",
    }),
    defineField({
      name: "linkedIn",
      title: "LinkedIn URL",
      type: "url",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "role",
      media: "avatar",
    },
  },
});
