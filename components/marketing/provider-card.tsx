import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ScoreBadge } from "./score-badge";
import { FDABadge } from "./fda-badge";
import { cn } from "@/lib/utils";
import type { Provider } from "@/lib/sanity/types";

interface ProviderCardProps {
  provider: Provider;
  rank?: number;
  badge?: string;
  variant?: "default" | "compact" | "featured";
  className?: string;
}

export function ProviderCard({
  provider,
  rank,
  badge,
  variant = "default",
  className,
}: ProviderCardProps) {
  const overallScore = provider.scores?.overall ?? 0;

  if (variant === "compact") {
    return (
      <Card className={cn("hover:shadow-md transition-shadow", className)}>
        <CardContent className="p-4">
          <div className="flex items-center gap-4">
            {rank && (
              <span className="font-display text-2xl font-bold text-muted-foreground">
                #{rank}
              </span>
            )}
            <div className="w-12 h-12 bg-cloud rounded-lg flex items-center justify-center flex-shrink-0">
              {provider.logo ? (
                <Image
                  src={`/placeholder-logo.svg`}
                  alt={provider.name}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              ) : (
                <span className="text-lg font-bold text-muted-foreground">
                  {provider.name.charAt(0)}
                </span>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-midnight truncate">
                {provider.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                From ${provider.pricing?.startingPrice ?? "N/A"}/mo
              </p>
            </div>
            <ScoreBadge score={overallScore} size="sm" showLabel={false} />
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card
      className={cn(
        "hover:shadow-lg transition-shadow overflow-hidden h-full flex flex-col",
        variant === "featured" && "ring-2 ring-forest/30",
        className
      )}
    >
      <CardContent className="p-6 flex-1">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            {rank && (
              <span className="font-display text-3xl font-bold text-muted-foreground">
                #{rank}
              </span>
            )}
            <div className="w-14 h-14 bg-cloud rounded-lg flex items-center justify-center">
              {provider.logo ? (
                <Image
                  src={`/placeholder-logo.svg`}
                  alt={provider.name}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              ) : (
                <span className="text-xl font-bold text-muted-foreground">
                  {provider.name.charAt(0)}
                </span>
              )}
            </div>
          </div>
          <ScoreBadge score={overallScore} size="md" />
        </div>

        <div className="flex items-center gap-2 mb-2">
          <h3 className="font-display text-xl font-semibold text-midnight">
            {provider.name}
          </h3>
          {badge && (
            <span className="text-xs font-medium bg-forest text-white px-2 py-0.5 rounded-full">
              {badge}
            </span>
          )}
        </div>

        {provider.oneLineVerdict && (
          <p className="text-sm text-slate mb-4">{provider.oneLineVerdict}</p>
        )}

        <div className="flex flex-wrap gap-2 mb-4">
          {provider.fdaStatus && (
            <FDABadge status={provider.fdaStatus} size="sm" />
          )}
        </div>

        {/* Quick Facts */}
        <div className="grid grid-cols-2 gap-3 text-sm mb-4">
          <div>
            <span className="text-muted-foreground">Starting at</span>
            <p className="font-mono font-semibold text-midnight">
              ${provider.pricing?.startingPrice ?? "N/A"}/mo
            </p>
          </div>
          <div>
            <span className="text-muted-foreground">Consultation</span>
            <p className="font-mono font-semibold text-midnight">
              {provider.pricing?.consultationFee === 0
                ? "Free"
                : `$${provider.pricing?.consultationFee ?? "N/A"}`}
            </p>
          </div>
        </div>

        {/* Pros */}
        {provider.pros && provider.pros.length > 0 && (
          <ul className="space-y-1.5">
            {provider.pros.slice(0, 3).map((pro, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <svg
                  className="w-4 h-4 text-forest flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-slate">{pro}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>

      <CardFooter className="px-6 pb-6 pt-0 flex flex-col gap-2 mt-auto">
        <Button asChild className="w-full bg-forest hover:bg-forest-light">
          <Link href={`/go/${provider.slug?.current}`}>
            Visit {provider.name}
          </Link>
        </Button>
        <Button asChild variant="outline" className="w-full">
          <Link href={`/providers/${provider.slug?.current}`}>Read Review</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
