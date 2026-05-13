import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

interface PricingItem {
  item: string;
  price: string;
  note?: string;
}

interface PricingTableProps {
  items: PricingItem[];
  providerName?: string;
  className?: string;
}

export function PricingTable({
  items,
  providerName,
  className,
}: PricingTableProps) {
  // Calculate total if possible
  const total = items.reduce((sum, item) => {
    const price = parseFloat(item.price.replace(/[^0-9.]/g, ""));
    return isNaN(price) ? sum : sum + price;
  }, 0);

  return (
    <div className={cn("rounded-lg border overflow-hidden", className)}>
      {providerName && (
        <div className="bg-cloud px-4 py-3 border-b">
          <h3 className="font-semibold text-midnight">
            {providerName} Pricing Breakdown
          </h3>
          <p className="text-xs text-muted-foreground mt-1">
            All-in cost disclosure. No hidden fees.
          </p>
        </div>
      )}

      <Table>
        <TableHeader>
          <TableRow className="bg-cloud/50">
            <TableHead className="w-[50%]">Item</TableHead>
            <TableHead className="text-right">Price</TableHead>
            <TableHead className="hidden sm:table-cell">Note</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{item.item}</TableCell>
              <TableCell className="text-right font-mono font-semibold">
                {item.price}
              </TableCell>
              <TableCell className="hidden sm:table-cell text-sm text-muted-foreground">
                {item.note}
              </TableCell>
            </TableRow>
          ))}
          {total > 0 && (
            <TableRow className="bg-cloud/50 font-semibold">
              <TableCell>Estimated Year 1 Total</TableCell>
              <TableCell className="text-right font-mono text-forest">
                ${(total * 12).toLocaleString()}
              </TableCell>
              <TableCell className="hidden sm:table-cell text-sm text-muted-foreground">
                Based on listed monthly prices
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <div className="bg-amber/5 px-4 py-3 border-t">
        <p className="text-xs text-slate">
          <strong>Price Disclaimer:</strong> Prices shown are estimates and may
          vary based on dosage, insurance coverage, and promotions. Always
          confirm pricing directly with the provider.
        </p>
      </div>
    </div>
  );
}

// Simple inline price display
interface PriceDisplayProps {
  price: number;
  period?: "month" | "year";
  originalPrice?: number;
  className?: string;
}

export function PriceDisplay({
  price,
  period = "month",
  originalPrice,
  className,
}: PriceDisplayProps) {
  return (
    <div className={cn("inline-flex items-baseline gap-2", className)}>
      {originalPrice && (
        <span className="text-muted-foreground line-through text-sm">
          ${originalPrice}
        </span>
      )}
      <span className="font-mono text-2xl font-bold text-midnight">${price}</span>
      <span className="text-muted-foreground text-sm">/{period === "month" ? "mo" : "yr"}</span>
    </div>
  );
}
