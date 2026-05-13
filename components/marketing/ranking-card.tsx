"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ScoreBadge, ScoreInline } from "./score-badge";
import { FDABadge } from "./fda-badge";
import { cn } from "@/lib/utils";
import type { Provider } from "@/lib/sanity/types";

interface RankingCardProps {
  provider: Provider;
  position: number;
  badge?: string;
  highlight?: string;
  className?: string;
}

export function RankingCard({
  provider,
  position,
  badge,
  highlight,
  className,
}: RankingCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const overallScore = provider.scores?.overall ?? 0;

  return (
    <div
      className={cn(
        "border rounded-lg bg-white overflow-hidden",
        position === 1 && "border-forest/30 ring-1 ring-forest/10",
        className
      )}
    >
      {/* Main Row */}
      <div className="p-4 md:p-6 flex items-center gap-4">
        {/* Rank Number */}
        <div className="flex-shrink-0 w-12 text-center">
          <span className="font-display text-3xl md:text-4xl font-bold text-muted-foreground">
            {position}
          </span>
        </div>

        {/* Logo */}
        <div className="w-12 h-12 md:w-14 md:h-14 bg-cloud rounded-lg flex items-center justify-center flex-shrink-0">
          {provider.logo ? (
            <Image
              src={`/placeholder-logo.svg`}
              alt={provider.name}
              width={48}
              height={48}
              className="object-contain"
            />
          ) : (
            <span className="text-lg font-bold text-muted-foreground">
              {provider.name.charAt(0)}
            </span>
          )}
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-semibold text-midnight">{provider.name}</h3>
            {badge && (
              <span className="text-xs font-medium bg-forest/10 text-forest px-2 py-0.5 rounded-full">
                {badge}
              </span>
            )}
          </div>
          {highlight && (
            <p className="text-sm text-slate mt-0.5 line-clamp-1">{highlight}</p>
          )}
          <div className="flex items-center gap-3 mt-2">
            {provider.fdaStatus && (
              <FDABadge status={provider.fdaStatus} size="sm" />
            )}
            <span className="text-sm text-muted-foreground">
              From{" "}
              <span className="font-mono font-medium text-midnight">
                ${provider.pricing?.startingPrice ?? "N/A"}/mo
              </span>
            </span>
          </div>
        </div>

        {/* Score */}
        <div className="hidden sm:block flex-shrink-0">
          <ScoreBadge score={overallScore} size="md" />
        </div>

        {/* Actions */}
        <div className="flex-shrink-0 flex items-center gap-2">
          <Button
            asChild
            size="sm"
            className="hidden md:inline-flex bg-forest hover:bg-forest-light"
          >
            <Link href={`/go/${provider.slug?.current}`}>Visit Site</Link>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-muted-foreground"
          >
            {isExpanded ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Score & CTA */}
      <div className="px-4 pb-4 flex items-center justify-between gap-4 sm:hidden">
        <ScoreBadge score={overallScore} size="sm" />
        <Button
          asChild
          size="sm"
          className="bg-forest hover:bg-forest-light"
        >
          <Link href={`/go/${provider.slug?.current}`}>Visit Site</Link>
        </Button>
      </div>

      {/* Expanded Details */}
      {isExpanded && (
        <div className="border-t bg-cloud/50 p-4 md:p-6">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Scores */}
            <div>
              <h4 className="font-semibold text-sm text-muted-foreground mb-3">
                Scores
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Pricing</span>
                  <ScoreInline score={provider.scores?.pricing ?? 0} />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Medical Quality</span>
                  <ScoreInline score={provider.scores?.medicalQuality ?? 0} />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">User Experience</span>
                  <ScoreInline score={provider.scores?.userExperience ?? 0} />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Support</span>
                  <ScoreInline score={provider.scores?.customerSupport ?? 0} />
                </div>
              </div>
            </div>

            {/* Pros */}
            <div>
              <h4 className="font-semibold text-sm text-muted-foreground mb-3">
                Pros
              </h4>
              <ul className="space-y-1.5">
                {(provider.pros ?? []).slice(0, 4).map((pro, index) => (
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
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cons */}
            <div>
              <h4 className="font-semibold text-sm text-muted-foreground mb-3">
                Cons
              </h4>
              <ul className="space-y-1.5">
                {(provider.cons ?? []).slice(0, 4).map((con, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <svg
                      className="w-4 h-4 text-coral flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 mt-6 pt-4 border-t">
            <Button asChild className="bg-forest hover:bg-forest-light">
              <Link href={`/go/${provider.slug?.current}`}>
                Visit {provider.name}
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href={`/providers/${provider.slug?.current}`}>
                Read Full Review
              </Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
