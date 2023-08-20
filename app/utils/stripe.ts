import Stripe from "stripe";
import { cache } from "react";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-08-16",
});

export const getPrices = cache(async () => {
  const prices = await stripe.prices.list();
  return prices;
});
