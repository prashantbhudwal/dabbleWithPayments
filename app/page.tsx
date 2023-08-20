import Plans from "./components/Plans";
import { getPrices } from "./utils/stripe";
export const revalidate = 3600; // revalidate the data at most every hour

export default async function Page() {
  const prices = await getPrices();
  console.log("prices", prices);
  return (
    <div>
      {prices.data.map((price) => (
        <div key={price.id}>
          <h2>{price.nickname || "No nickname"}</h2>
          <p>
            {price.unit_amount ? price.unit_amount / 100 : 0}{" "}
            {price.currency.toUpperCase()}
          </p>
        </div>
      ))}
      <Plans />
    </div>
  );
}
