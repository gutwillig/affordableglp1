import { cn } from "@/lib/utils";

interface ScoreBadgeProps {
  score: number;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  className?: string;
}

function getScoreColor(score: number): {
  bg: string;
  text: string;
  label: string;
} {
  if (score >= 90) {
    return {
      bg: "bg-forest/10",
      text: "text-forest",
      label: "Excellent",
    };
  }
  if (score >= 75) {
    return {
      bg: "bg-sky/10",
      text: "text-sky",
      label: "Good",
    };
  }
  if (score >= 60) {
    return {
      bg: "bg-amber/10",
      text: "text-amber",
      label: "Fair",
    };
  }
  return {
    bg: "bg-coral/10",
    text: "text-coral",
    label: "Poor",
  };
}

export function ScoreBadge({
  score,
  size = "md",
  showLabel = true,
  className,
}: ScoreBadgeProps) {
  const colors = getScoreColor(score);

  return (
    <div
      className={cn(
        "inline-flex flex-col items-center justify-center rounded-lg",
        colors.bg,
        size === "sm" && "w-12 h-12",
        size === "md" && "w-16 h-16",
        size === "lg" && "w-20 h-20",
        className
      )}
    >
      <span
        className={cn(
          "font-display font-bold",
          colors.text,
          size === "sm" && "text-lg",
          size === "md" && "text-2xl",
          size === "lg" && "text-3xl"
        )}
      >
        {score}
      </span>
      {showLabel && (
        <span
          className={cn(
            "font-medium uppercase tracking-wide",
            colors.text,
            size === "sm" && "text-[8px]",
            size === "md" && "text-[10px]",
            size === "lg" && "text-xs"
          )}
        >
          {colors.label}
        </span>
      )}
    </div>
  );
}

// Smaller inline version for use in tables/cards
interface ScoreInlineProps {
  score: number;
  className?: string;
}

export function ScoreInline({ score, className }: ScoreInlineProps) {
  const colors = getScoreColor(score);

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-mono text-sm font-semibold",
        colors.text,
        className
      )}
    >
      <span
        className={cn("w-2 h-2 rounded-full", colors.bg, {
          "bg-forest": score >= 90,
          "bg-sky": score >= 75 && score < 90,
          "bg-amber": score >= 60 && score < 75,
          "bg-coral": score < 60,
        })}
      />
      {score}
    </span>
  );
}
