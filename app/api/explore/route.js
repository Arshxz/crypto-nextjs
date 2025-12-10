export const runtime = "edge";

export async function GET() {
  try {
    const API_KEY = process.env.CMC_API_KEY;

    if (!API_KEY) {
      console.error("CMC_API_KEY is not set");
      return Response.json({ data: [] }, { status: 500 });
    }

    const res = await fetch(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=10",
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
