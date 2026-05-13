import { NextRequest, NextResponse } from "next/server";

// Cost calculator API
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { medication, format, brandPreference, state } = body;

    if (!medication) {
      return NextResponse.json(
        { error: "Medication is required" },
        { status: 400 }
      );
    }

    // Calculate costs based on inputs
    const costs = calculateCosts({
      medication,
      format: format || "injection",
      brandPreference: brandPreference || "either",
      state: state || "CA",
    });

    return NextResponse.json({
      success: true,
      costs,
    });
  } catch (error) {
    console.error("Cost calculator error:", error);
    return NextResponse.json(
      { error: "Failed to calculate costs" },
      { status: 500 }
    );
  }
}

interface CostInput {
  medication: string;
  format: string;
  brandPreference: string;
  state: string;
}

interface CostOutput {
  monthlyMin: number;
  monthlyMax: number;
  yearOneTotal: number;
  comparedToRetail: string;
  topProviders: {
    name: string;
    slug: string;
    monthlyPrice: number;
    note: string;
  }[];
}

function calculateCosts(input: CostInput): CostOutput {
  // Simplified cost calculation
  // In production, this would pull from Sanity database

  let monthlyMin = 149;
  let monthlyMax = 399;
  let retailPrice = 1200;

  // Adjust based on medication
  if (input.medication === "tirzepatide" || input.medication === "zepbound") {
    monthlyMin = 199;
    monthlyMax = 499;
    retailPrice = 1500;
  }

  // Adjust based on brand preference
  if (input.brandPreference === "brand") {
    monthlyMin = Math.max(monthlyMin, 299);
    monthlyMax = Math.max(monthlyMax, 549);
  } else if (input.brandPreference === "compounded") {
    monthlyMax = Math.min(monthlyMax, 299);
  }

  const yearOneTotal = (monthlyMin + monthlyMax) / 2 * 12;
  const savings = Math.round((1 - yearOneTotal / (retailPrice * 12)) * 100);

  return {
    monthlyMin,
    monthlyMax,
    yearOneTotal: Math.round(yearOneTotal),
    comparedToRetail: `Save up to ${savings}% vs retail pharmacy`,
    topProviders: [
      {
        name: "Henry Meds",
        slug: "henry-meds",
        monthlyPrice: 149,
        note: "Lowest price, compounded only",
      },
      {
        name: "Hims/Hers",
        slug: "hims",
        monthlyPrice: 199,
        note: "Best overall value",
      },
      {
        name: "Ro",
        slug: "ro",
        monthlyPrice: 249,
        note: "Comprehensive program",
      },
    ],
  };
}
