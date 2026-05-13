import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { MedicalReviewer as MedicalReviewerType } from "@/lib/sanity/types";

interface MedicalReviewerProps {
  reviewer: MedicalReviewerType;
  variant?: "inline" | "signature" | "full";
  className?: string;
}

export function MedicalReviewer({
  reviewer,
  variant = "signature",
  className,
}: MedicalReviewerProps) {
  if (variant === "inline") {
    return (
      <span className={cn("inline-flex items-center gap-2", className)}>
        <span className="text-sm text-muted-foreground">
          Reviewed by{" "}
          <Link
            href={`/about/medical-team/${reviewer.slug?.current}`}
            className="font-medium text-foreground hover:text-forest"
          >
            {reviewer.name}
            {reviewer.credentials && `, ${reviewer.credentials}`}
          </Link>
        </span>
      </span>
    );
  }

  if (variant === "signature") {
    return (
      <div
        className={cn(
          "flex items-start gap-4 p-4 rounded-lg bg-cloud/50 border",
          className
        )}
      >
        <div className="w-16 h-16 rounded-full bg-cloud overflow-hidden flex-shrink-0">
          {reviewer.headshot ? (
            <Image
              src="/placeholder-avatar.svg"
              alt={reviewer.name}
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-xl font-bold text-muted-foreground">
              {reviewer.name.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
            Medically Reviewed By
          </p>
          <Link
            href={`/about/medical-team/${reviewer.slug?.current}`}
            className="font-semibold text-midnight hover:text-forest"
          >
            {reviewer.name}
            {reviewer.credentials && `, ${reviewer.credentials}`}
          </Link>
          {reviewer.title && (
            <p className="text-sm text-slate">{reviewer.title}</p>
          )}
          {reviewer.shortBio && (
            <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
              {reviewer.shortBio}
            </p>
          )}
        </div>
      </div>
    );
  }

  // Full variant
  return (
    <div className={cn("rounded-lg border overflow-hidden", className)}>
      <div className="bg-cloud px-6 py-4 border-b">
        <h3 className="font-semibold text-midnight">About the Medical Reviewer</h3>
      </div>
      <div className="p-6">
        <div className="flex items-start gap-6">
          <div className="w-24 h-24 rounded-full bg-cloud overflow-hidden flex-shrink-0">
            {reviewer.headshot ? (
              <Image
                src="/placeholder-avatar.svg"
                alt={reviewer.name}
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-2xl font-bold text-muted-foreground">
                {reviewer.name.charAt(0)}
              </div>
            )}
          </div>
          <div className="flex-1">
            <Link
              href={`/about/medical-team/${reviewer.slug?.current}`}
              className="font-display text-xl font-semibold text-midnight hover:text-forest"
            >
              {reviewer.name}
              {reviewer.credentials && `, ${reviewer.credentials}`}
            </Link>
            {reviewer.title && (
              <p className="text-slate mt-1">{reviewer.title}</p>
            )}

            {reviewer.specialties && reviewer.specialties.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {reviewer.specialties.map((specialty, index) => (
                  <span
                    key={index}
                    className="text-xs bg-sky/10 text-sky px-2 py-1 rounded-full"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            )}

            {reviewer.shortBio && (
              <p className="text-sm text-slate mt-4">{reviewer.shortBio}</p>
            )}

            <Link
              href={`/about/medical-team/${reviewer.slug?.current}`}
              className="text-sm text-forest hover:text-forest-light font-medium mt-4 inline-block"
            >
              View full profile &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
