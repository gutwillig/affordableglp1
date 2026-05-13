import Link from "next/link";

interface TrustBarProps {
  reviewerName?: string;
  lastUpdated?: string;
}

export function TrustBar({
  reviewerName = "Dr. Sarah Chen, MD",
  lastUpdated = "May 2026",
}: TrustBarProps) {
  return (
    <div className="bg-midnight text-white h-8 flex items-center text-xs">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <svg
              className="w-3.5 h-3.5 text-forest-light"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>
              Medically reviewed by{" "}
              <span className="font-medium">{reviewerName}</span>
            </span>
          </span>
          <span className="hidden sm:inline text-muted">|</span>
          <span className="hidden sm:inline text-muted">
            Updated {lastUpdated}
          </span>
        </div>
        <Link
          href="/about/editorial-standards"
          className="text-sky-light hover:text-white transition-colors hidden sm:inline"
        >
          Editorial Standards
        </Link>
      </div>
    </div>
  );
}
