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
        We may earn a commission from links on this page.{" "}
        <Link href="/affiliate-disclosure" className="underline hover:text-foreground">
          Learn more
        </Link>
      </p>
    );
  }

  if (variant === "footer") {
    return (
      <p className={cn("text-xs text-muted-foreground", className)}>
        We may earn commissions from provider links. This doesn&apos;t affect our rankings.{" "}
        <Link href="/affiliate-disclosure" className="underline hover:text-foreground">
          Disclosure
        </Link>
      </p>
    );
  }

  // Full disclosure - simplified
  return (
    <div className={cn("text-sm text-muted-foreground border-t pt-6", className)}>
      <p>
        <span className="font-medium text-foreground">Affiliate Disclosure:</span>{" "}
        We earn commissions from some provider links at no extra cost to you.
        This doesn&apos;t influence our rankings or reviews.{" "}
        <Link href="/affiliate-disclosure" className="text-forest hover:underline">
          Full disclosure
        </Link>
      </p>
    </div>
  );
}
