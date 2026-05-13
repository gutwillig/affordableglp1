import { provider } from "./provider";
import { medication } from "./medication";
import { review } from "./review";
import { comparison } from "./comparison";
import { blogPost } from "./blogPost";
import { medicalReviewer } from "./medicalReviewer";
import { author } from "./author";
import { fdaEvent } from "./fdaEvent";
import { ranking } from "./ranking";
import { faqEntry } from "./faqEntry";
import { glossaryTerm } from "./glossaryTerm";
import { page } from "./page";

export const schemaTypes = [
  provider,
  medication,
  review,
  comparison,
  blogPost,
  medicalReviewer,
  author,
  fdaEvent,
  ranking,
  faqEntry,
  glossaryTerm,
  page,
];
