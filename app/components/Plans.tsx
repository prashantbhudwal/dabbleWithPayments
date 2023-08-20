"use client";
import { GetPricesReturnType } from "../utils/stripe";
import axios from "axios";
import { redirect } from "next/navigation";

type PlansProps = {
  prices: GetPricesReturnType["data"]; // An array of Stripe.Price objects
};

const checkout = async (priceId: string) => {
  const res = await axios.post("/api/stripe/checkout", {
    priceId,
  });
  console.log(res.data);
  window.location.assign(res.data);
};

const Plans: React.FC<PlansProps> = ({ prices }) => {
  return (
    <div className=" flex gap-2">
      {prices.map((price) => (
        <div key={price.id} className=" bg-slate-500">
          <h2>{price.nickname || "No nickname"}</h2>
          <p>
            {price.unit_amount ? price.unit_amount / 100 : 0}{" "}
            {price.currency.toUpperCase()}
          </p>
          <button
            className="bg-zinc-200 p-2"
            onClick={() => checkout(price.id)}
          >
            Buy now
          </button>
        </div>
      ))}
    </div>
  );
};

export default Plans;
