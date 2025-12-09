import Title from "../components/title";
import GetData from "./getData";
import DataTable from "../components/dataTable";

import { Animation } from "@/app/context/store";

// We can pass headers on a get request using two ways:
// axios.defaults.headers.get['X-CoinAPI-Key'] = API_KEY;
const HOSTNAME = "https://pro-api.coinmarketcap.com";
const API_KEY = "8a64fa8e-4a97-4783-bfc0-7e84c7a28ebb";
export const runtime = "edge";

async function getExplore() {
  try {
    const res = await fetch(
      `${HOSTNAME}/v1/cryptocurrency/listings/latest?limit=10`,
      {
        headers: { "X-CMC_PRO_API_KEY": API_KEY },
        cache: "no-store",
      }
    );

    if (!res.ok) {
      console.error("Fetch failed", await res.text());
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (err) {
    console.error("Error fetching data:", err);
    return { data: [] }; // fallback so page doesn’t crash
  }
}

export default async function Explore() {
  const explore = await getExplore();

  return (
    <div>
      <Title title="Explore the Market" />
      <DataTable data={explore.data} />
    </div>
  );
}
