import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "placeholder";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
  name: "affordable-glp1",
  title: "Affordable GLP-1 CMS",

  projectId,
  dataset,

  basePath: "/studio",

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Providers")
              .child(
                S.documentTypeList("provider").title("Providers")
              ),
            S.listItem()
              .title("Medications")
              .child(
                S.documentTypeList("medication").title("Medications")
              ),
            S.listItem()
              .title("Reviews")
              .child(
                S.documentTypeList("review").title("Reviews")
              ),
            S.listItem()
              .title("Comparisons")
              .child(
                S.documentTypeList("comparison").title("Comparisons")
              ),
            S.listItem()
              .title("Rankings")
              .child(
                S.documentTypeList("ranking").title("Rankings")
              ),
            S.divider(),
            S.listItem()
              .title("Blog")
              .child(
                S.list()
                  .title("Blog")
                  .items([
                    S.listItem()
                      .title("Posts")
                      .child(S.documentTypeList("blogPost").title("Blog Posts")),
                    S.listItem()
                      .title("Authors")
                      .child(S.documentTypeList("author").title("Authors")),
                  ])
              ),
            S.divider(),
            S.listItem()
              .title("FDA Tracker")
              .child(
                S.documentTypeList("fdaEvent").title("FDA Events")
              ),
            S.divider(),
            S.listItem()
              .title("Reference")
              .child(
                S.list()
                  .title("Reference")
                  .items([
                    S.listItem()
                      .title("FAQ Entries")
                      .child(S.documentTypeList("faqEntry").title("FAQ Entries")),
                    S.listItem()
                      .title("Glossary Terms")
                      .child(S.documentTypeList("glossaryTerm").title("Glossary Terms")),
                    S.listItem()
                      .title("Medical Reviewers")
                      .child(S.documentTypeList("medicalReviewer").title("Medical Reviewers")),
                  ])
              ),
            S.divider(),
            S.listItem()
              .title("Pages")
              .child(
                S.documentTypeList("page").title("Pages")
              ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
