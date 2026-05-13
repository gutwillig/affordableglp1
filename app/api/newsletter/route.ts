import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }

    // In production, integrate with Beehiiv or email service
    // For now, just log and return success
    console.log("Newsletter signup:", email);

    // Placeholder for Beehiiv integration
    // const beehiivApiKey = process.env.BEEHIIV_API_KEY;
    // const beehiivPublicationId = process.env.BEEHIIV_PUBLICATION_ID;
    //
    // const response = await fetch(
    //   `https://api.beehiiv.com/v2/publications/${beehiivPublicationId}/subscriptions`,
    //   {
    //     method: "POST",
    //     headers: {
    //       Authorization: `Bearer ${beehiivApiKey}`,
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       email,
    //       reactivate_existing: true,
    //       send_welcome_email: true,
    //     }),
    //   }
    // );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Newsletter signup error:", error);
    return NextResponse.json(
      { error: "Failed to subscribe" },
      { status: 500 }
    );
  }
}
