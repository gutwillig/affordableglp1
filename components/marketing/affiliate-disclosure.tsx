import Link from "next/link";
import { cn } from "@/lib/utils";

interface AffiliateDisclosureProps {
  variant?: "inline" | "footer" | "full";
  className?: string;
}

export function AffiliateDisclosure({
  variant = "inline",
  className,
}: AffiliateDisclosureProps) {
  if (variant === "inline") {
    return (
      <p className={cn("text-xs text-muted-foreground", className)}>
        <strong>Disclosure:</strong> We may earn a commission when you click our
        links at no extra cost to you.{" "}
        <Link href="/affiliate-disclosure" className="underline hover:text-foreground">
          Learn more
        </Link>
      </p>
    );
  }

  if (variant === "footer") {
    return (
      <div className={cn("bg-cloud py-4", className)}>
        <div className="container mx-auto px-4">
          <p className="text-xs text-slate text-center">
            <strong>Affiliate Disclosure:</strong> AffordableGLP-1.com earns
            commissions from qualifying purchases through our affiliate links.
            This does not affect our editorial independence or the price you
            pay.{" "}
            <Link
              href="/affiliate-disclosure"
              className="underline hover:text-midnight"
            >
              Read our full disclosure
            </Link>
          </p>
        </div>
      </div>
    );
  }

  // Full disclosure
  return (
    <div
      className={cn(
        "bg-cloud border border-soft rounded-lg p-6",
        className
      )}
    >
      <h3 className="font-semibold text-midnight mb-3 flex items-center gap-2">
        <svg
          className="w-5 h-5 text-forest"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        Affiliate Disclosure
      </h3>
      <div className="text-sm text-slate space-y-2">
        <p>
          AffordableGLP-1.com is reader-supported. When you click on links to
          telehealth providers and make a purchase, we may earn an affiliate
          commission at no additional cost to you.
        </p>
        <p>
          Our editorial content is not influenced by affiliate partnerships. We
          maintain strict editorial standards and only recommend providers we
          believe offer genuine value to our readers.
        </p>
        <p>
          <Link
            href="/affiliate-disclosure"
            className="text-forest hover:text-forest-light underline"
          >
            Read our complete affiliate disclosure policy
          </Link>
        </p>
      </div>
    </div>
  );
}
