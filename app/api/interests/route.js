export const runtime = "edge";

export async function GET() {
  try {
    const API_KEY = process.env.CMC_API_KEY;

    if (!API_KEY) {
      console.error("CMC_API_KEY is not set");
      return Response.json({ data: [] }, { status: 500 });
    }

    const INTERESTS = {
      WINR: 23681,
      COW: 19269,
      PENDLE: 9481,
      OP: 11840,
      DEGEN: 30096,
      FRAX: 6952,
      RLB: 15271,
      RBN: 12387,
      RUNE: 4157,
      LPT: 3640,
      LAI: 23846,
      GEOD: 20969,
      SHRAP: 28363,
      WIFI: 24133,
    };

    // Get crypto IDs as comma-separated string
    const idString = Object.values(INTERESTS).join(",");

    const res = await fetch(
      `https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?id=${idString}`,
      {
        headers: { "X-CMC_PRO_API_KEY": API_KEY },
        cache: "no-store",
      }
    );

    if (!res.ok) {
      console.error("CoinMarketCap API error:", res.status);
      return Response.json({ data: [] }, { status: res.status });
    }

    const data = await res.json();
    return Response.json(data);
  } catch (err) {
    console.error("API fetch error:", err);
    return Response.json({ data: [] }, { status: 500 });
  }
}
