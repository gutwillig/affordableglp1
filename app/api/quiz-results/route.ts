import { NextRequest, NextResponse } from "next/server";

// Quiz results API for analytics and potential email capture
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { answers, email } = body;

    if (!answers || typeof answers !== "object") {
      return NextResponse.json(
        { error: "Quiz answers are required" },
        { status: 400 }
      );
    }

    // Log quiz completion for analytics
    console.log("Quiz completed:", {
      answers,
      email: email || "not provided",
      timestamp: new Date().toISOString(),
    });

    // Calculate recommendations based on answers
    const recommendations = calculateRecommendations(answers);

    // If email provided, save for follow-up
    if (email) {
      // In production, save to database and potentially trigger email sequence
      console.log("Quiz email captured:", email);
    }

    return NextResponse.json({
      success: true,
      recommendations,
    });
  } catch (error) {
    console.error("Quiz results error:", error);
    return NextResponse.json(
      { error: "Failed to process quiz results" },
      { status: 500 }
    );
  }
}

function calculateRecommendations(answers: Record<string, string>) {
  // Simplified recommendation logic
  // In production, this would be more sophisticated

  const providers = [
    {
      slug: "hims",
      name: "Hims/Hers",
      score: 0,
      reasons: [] as string[],
    },
    {
      slug: "henry-meds",
      name: "Henry Meds",
      score: 0,
      reasons: [] as string[],
    },
    {
      slug: "ro",
      name: "Ro",
      score: 0,
      reasons: [] as string[],
    },
  ];

  // Budget scoring
  if (answers.budget === "budget") {
    providers[1].score += 30; // Henry Meds
    providers[1].reasons.push("Best for your budget");
  } else if (answers.budget === "moderate") {
    providers[0].score += 20; // Hims
    providers[0].reasons.push("Great value for moderate budget");
  } else if (answers.budget === "premium") {
    providers[2].score += 25; // Ro
    providers[2].reasons.push("Premium service within budget");
  }

  // Medication preference
  if (answers.medication === "compounded") {
    providers[1].score += 20;
    providers[1].reasons.push("Specializes in compounded medications");
  } else if (answers.medication === "brand") {
    providers[2].score += 20;
    providers[2].reasons.push("Strong brand-name medication access");
  } else {
    providers[0].score += 15;
    providers[0].reasons.push("Offers both brand and compounded options");
  }

  // Support level
  if (answers.support === "comprehensive") {
    providers[2].score += 20;
    providers[2].reasons.push("Comprehensive program approach");
  } else if (answers.support === "minimal") {
    providers[1].score += 15;
    providers[1].reasons.push("Streamlined, no-frills service");
  } else {
    providers[0].score += 15;
    providers[0].reasons.push("Balanced support level");
  }

  // Speed
  if (answers.speed === "asap") {
    providers[0].score += 15;
    providers[0].reasons.push("Fast prescription turnaround");
    providers[1].score += 15;
    providers[1].reasons.push("Quick intake process");
  }

  // Sort by score and return top 3
  return providers
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((p) => ({
      slug: p.slug,
      name: p.name,
      reasons: p.reasons.slice(0, 3),
    }));
}
