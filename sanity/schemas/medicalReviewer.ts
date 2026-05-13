import { defineField, defineType } from "sanity";

export const medicalReviewer = defineType({
  name: "medicalReviewer",
  title: "Medical Reviewer",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Full Name",
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
      name: "credentials",
      title: "Credentials",
      type: "string",
      description: "e.g., MD, DO, PharmD, RD",
    }),
    defineField({
      name: "title",
      title: "Professional Title",
      type: "string",
      description: "e.g., Board-Certified Endocrinologist",
    }),
    defineField({
      name: "headshot",
      title: "Headshot",
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
      rows: 3,
      description: "Brief bio for inline display",
    }),
    defineField({
      name: "specialties",
      title: "Specialties",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "education",
      title: "Education",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "institution", type: "string", title: "Institution" },
            { name: "degree", type: "string", title: "Degree" },
            { name: "year", type: "string", title: "Year" },
          ],
        },
      ],
    }),
    defineField({
      name: "certifications",
      title: "Certifications",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "affiliations",
      title: "Professional Affiliations",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "linkedIn",
      title: "LinkedIn URL",
      type: "url",
    }),
    defineField({
      name: "npiNumber",
      title: "NPI Number",
      type: "string",
      description: "National Provider Identifier (for verification)",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "credentials",
      media: "headshot",
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: subtitle ? `${title}, ${subtitle}` : title,
        media,
      };
    },
  },
});
