export const runtime = "edge";
import Title from "../components/title";
import DataTable from "../components/dataTable";

// We can pass headers on a get request using two ways:
// axios.defaults.headers.get['X-CoinAPI-Key'] = API_KEY;
const HOSTNAME = "https://pro-api.coinmarketcap.com";

async function getExplore() {
  try {
    const API_KEY = process.env.CMC_API_KEY;
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
