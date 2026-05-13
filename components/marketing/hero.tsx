import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  className?: string;
  size?: "default" | "large" | "small";
}

export function Hero({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  className,
  size = "default",
}: HeroProps) {
  return (
    <section
      className={cn(
        "relative bg-gradient-to-br from-cloud via-white to-cloud overflow-hidden",
        size === "large" && "min-h-[60vh]",
        size === "default" && "min-h-[50vh]",
        size === "small" && "py-16",
        className
      )}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(5,150,105,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(14,165,233,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 flex items-center h-full py-12 md:py-20">
        <div className="max-w-3xl">
          {eyebrow && (
            <span className="inline-block text-sm font-medium text-forest uppercase tracking-wide mb-4">
              {eyebrow}
            </span>
          )}

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-midnight leading-tight mb-6">
            {title}
          </h1>

          {subtitle && (
            <p className="text-lg md:text-xl text-slate max-w-2xl mb-8">
              {subtitle}
            </p>
          )}

          {(primaryCta || secondaryCta) && (
            <div className="flex flex-col sm:flex-row gap-4">
              {primaryCta && (
                <Button
                  asChild
                  size="lg"
                  className="bg-forest hover:bg-forest-light text-white"
                >
                  <Link href={primaryCta.href}>{primaryCta.text}</Link>
                </Button>
              )}
              {secondaryCta && (
                <Button asChild size="lg" variant="outline">
                  <Link href={secondaryCta.href}>{secondaryCta.text}</Link>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
