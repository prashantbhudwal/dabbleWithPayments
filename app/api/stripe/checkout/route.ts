import { NextRequest, NextResponse } from "next/server";
import { checkout } from "@/app/utils/stripe";
import Stripe from "stripe";
import { cache } from "react";
import { headers } from "next/headers";
import { stripe } from "@/app/utils/stripe";

export async function POST(req: NextRequest) {
  const headersList = headers();

  const origin = headersList.get("origin");
  console.log(origin);

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: "price_1NghqwSGZ8EG0JcbKMMqNuRD",
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${origin}/success`,
    cancel_url: `${origin}/canceled`,
  });
  return NextResponse.json(session.url);
}
