import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import { ScoreBadge } from "./score-badge";
import { cn } from "@/lib/utils";
import type { Provider } from "@/lib/sanity/types";

interface ComparisonRow {
  category: string;
  providerAValue: string;
  providerBValue: string;
  winner?: "providerA" | "providerB" | "tie";
}

interface ComparisonTableProps {
  providerA: Provider;
  providerB: Provider;
  rows: ComparisonRow[];
  className?: string;
}

export function ComparisonTable({
  providerA,
  providerB,
  rows,
  className,
}: ComparisonTableProps) {
  return (
    <div className={cn("rounded-lg border overflow-hidden", className)}>
      {/* Header with Provider Info */}
      <div className="grid grid-cols-3 bg-cloud">
        {/* Empty corner */}
        <div className="p-4 border-r" />

        {/* Provider A Header */}
        <div className="p-4 border-r text-center">
          <div className="w-12 h-12 mx-auto bg-white rounded-lg flex items-center justify-center mb-2">
            {providerA.logo ? (
              <Image
                src="/placeholder-logo.svg"
                alt={providerA.name}
                width={40}
                height={40}
              />
            ) : (
              <span className="text-lg font-bold text-muted-foreground">
                {providerA.name.charAt(0)}
              </span>
            )}
          </div>
          <h3 className="font-semibold text-midnight">{providerA.name}</h3>
          <div className="mt-2 flex justify-center">
            <ScoreBadge
              score={providerA.scores?.overall ?? 0}
              size="sm"
              showLabel={false}
            />
          </div>
        </div>

        {/* Provider B Header */}
        <div className="p-4 text-center">
          <div className="w-12 h-12 mx-auto bg-white rounded-lg flex items-center justify-center mb-2">
            {providerB.logo ? (
              <Image
                src="/placeholder-logo.svg"
                alt={providerB.name}
                width={40}
                height={40}
              />
            ) : (
              <span className="text-lg font-bold text-muted-foreground">
                {providerB.name.charAt(0)}
              </span>
            )}
          </div>
          <h3 className="font-semibold text-midnight">{providerB.name}</h3>
          <div className="mt-2 flex justify-center">
            <ScoreBadge
              score={providerB.scores?.overall ?? 0}
              size="sm"
              showLabel={false}
            />
          </div>
        </div>
      </div>

      {/* Comparison Rows */}
      <Table>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium bg-cloud/30 w-1/3">
                {row.category}
              </TableCell>
              <TableCell
                className={cn(
                  "text-center",
                  row.winner === "providerA" && "bg-forest/5"
                )}
              >
                <span
                  className={cn(
                    row.winner === "providerA" && "font-semibold text-forest"
                  )}
                >
                  {row.providerAValue}
                </span>
                {row.winner === "providerA" && (
                  <svg
                    className="w-4 h-4 text-forest inline-block ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </TableCell>
              <TableCell
                className={cn(
                  "text-center",
                  row.winner === "providerB" && "bg-forest/5"
                )}
              >
                <span
                  className={cn(
                    row.winner === "providerB" && "font-semibold text-forest"
                  )}
                >
                  {row.providerBValue}
                </span>
                {row.winner === "providerB" && (
                  <svg
                    className="w-4 h-4 text-forest inline-block ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* CTA Footer */}
      <div className="grid grid-cols-3 border-t">
        <div className="p-4 bg-cloud/30" />
        <div className="p-4 text-center border-x">
          <Button
            asChild
            size="sm"
            className="bg-forest hover:bg-forest-light w-full"
          >
            <Link href={`/go/${providerA.slug?.current}`}>
              Visit {providerA.name}
            </Link>
          </Button>
        </div>
        <div className="p-4 text-center">
          <Button
            asChild
            size="sm"
            className="bg-forest hover:bg-forest-light w-full"
          >
            <Link href={`/go/${providerB.slug?.current}`}>
              Visit {providerB.name}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
