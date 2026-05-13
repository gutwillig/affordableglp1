import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface FDABadgeProps {
  status: "approved" | "compounded" | "both" | "warning";
  size?: "sm" | "md" | "lg";
  showTooltip?: boolean;
  className?: string;
}

const statusConfig = {
  approved: {
    label: "FDA Approved",
    shortLabel: "FDA",
    bg: "bg-forest/10",
    text: "text-forest",
    border: "border-forest/20",
    icon: (
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
    ),
    tooltip:
      "This provider offers FDA-approved brand-name medications (Wegovy, Zepbound, etc.)",
  },
  compounded: {
    label: "Compounded",
    shortLabel: "503B",
    bg: "bg-amber/10",
    text: "text-amber",
    border: "border-amber/20",
    icon: (
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
          clipRule="evenodd"
        />
      </svg>
    ),
    tooltip:
      "This provider offers compounded semaglutide or tirzepatide from 503B-registered pharmacies",
  },
  both: {
    label: "FDA & Compounded",
    shortLabel: "Both",
    bg: "bg-sky/10",
    text: "text-sky",
    border: "border-sky/20",
    icon: (
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
        <path
          fillRule="evenodd"
          d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
          clipRule="evenodd"
        />
      </svg>
    ),
    tooltip:
      "This provider offers both FDA-approved brand-name and compounded medication options",
  },
  warning: {
    label: "FDA Warning",
    shortLabel: "Warning",
    bg: "bg-coral/10",
    text: "text-coral",
    border: "border-coral/20",
    icon: (
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
          clipRule="evenodd"
        />
      </svg>
    ),
    tooltip: "This provider has received an FDA warning letter. Check details.",
  },
};

export function FDABadge({
  status,
  size = "md",
  showTooltip = true,
  className,
}: FDABadgeProps) {
  const config = statusConfig[status];

  const badge = (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border font-medium",
        config.bg,
        config.text,
        config.border,
        size === "sm" && "px-2 py-0.5 text-xs",
        size === "md" && "px-2.5 py-1 text-xs",
        size === "lg" && "px-3 py-1.5 text-sm",
        className
      )}
    >
      {config.icon}
      <span>{size === "sm" ? config.shortLabel : config.label}</span>
    </span>
  );

  if (showTooltip) {
    return (
      <Tooltip>
        <TooltipTrigger className="cursor-help">{badge}</TooltipTrigger>
        <TooltipContent>
          <p className="max-w-xs">{config.tooltip}</p>
        </TooltipContent>
      </Tooltip>
    );
  }

  return badge;
}
