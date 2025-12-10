export const runtime = "edge";

export async function GET() {
  try {
    const API_KEY = process.env.CMC_API_KEY;

    if (!API_KEY) {
      console.error("CMC_API_KEY is not set");
      return Response.json({ data: [] }, { status: 500 });
    }

    const PORTFOLIO = {
      USDT: 825,
      XRP: 52,
      SNX: 2586,
      CRV: 6538,
      MANA: 1966,
      SHIB: 5994,
      LINK: 1975,
      DOT: 6636,
      ATOM: 3794,
      SOL: 5426,
      GFI: 13967,
      AVAX: 5805,
      "1INCH": 8104,
      IMX: 10603,
      WOO: 7501,
      NEAR: 6535,
      PYR: 9308,
      OCEAN: 3911,
      DYDX: 11156,
      TRAC: 2467,
      GRT: 6719,
      ORAI: 7533,
      AGIX: 2424,
      OP: 11840,
      FET: 3773,
      GALA: 7080,
      SCRT: 5604,
      APE: 18876,
      RUNE: 4157,
      CNS: 5963,
      SAND: 6210,
      ALI: 16876,
      HBAR: 4642,
    };

    // Get crypto IDs as comma-separated string
    const idString = Object.values(PORTFOLIO).join(",");

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
