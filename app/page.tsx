import Plans from "./components/Plans";
import { getPrices } from "./utils/stripe";
export const revalidate = 3600; // revalidate the data at most every hour

export default async function Page() {
  const prices = await getPrices();
  return (
    <div>
      <Plans prices={prices.data} />
    </div>
  );
}
