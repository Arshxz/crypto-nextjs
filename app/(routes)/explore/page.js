import Title from "../components/title";
import DataTable from "../components/dataTable";

// We can pass headers on a get request using two ways:
// axios.defaults.headers.get['X-CoinAPI-Key'] = API_KEY;
export const runtime = "edge";
const HOSTNAME = "https://pro-api.coinmarketcap.com";
const API_KEY = "8a64fa8e-4a97-4783-bfc0-7e84c7a28ebb";

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
      console.error("Fetch failed:", await res.text());
      return { data: [] };
    }
    return res.json();
  } catch (err) {
    console.error("Error fetching data:", err);
    return { data: [] };
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
