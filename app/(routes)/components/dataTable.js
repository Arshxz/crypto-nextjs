import Link from "next/link";
import TableHeader from "./tableHeader";

// SVGS
const UpSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-caret-up-fill inline"
    viewBox="0 0 16 16"
  >
    <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
  </svg>
);

const DownSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-caret-down-fill inline"
    viewBox="0 0 16 16"
  >
    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
  </svg>
);

export default function DataTable({ data, loading = false }) {
  // if (data) {
  //   for (var i = 0; i < data.length; i++) {
  //     data[i].num_market_pairs = Math.round(
  //       data[i].quote.USD.volume_24h / data[i].quote.USD.price
  //     ).toLocaleString();

  //     if (data[i].quote.USD.price > 1) {
  //       data[i].quote.USD.price = data[i].quote.USD.price
  //         .toFixed(2)
  //         .toString()
  //         .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  //     } else {
  //       data[i].quote.USD.price = data[i].quote.USD.price
  //         .toFixed(4)
  //         .toLocaleString();
  //     }

  //     data[i].quote.USD.percent_change_24h =
  //       data[i].quote.USD.percent_change_24h.toFixed(2);
  //     data[i].quote.USD.percent_change_7d =
  //       data[i].quote.USD.percent_change_7d.toFixed(2);
  //     data[i].quote.USD.market_cap = Math.round(
  //       data[i].quote.USD.market_cap
  //     ).toLocaleString();
  //     data[i].quote.USD.volume_24h = Math.round(
  //       data[i].quote.USD.volume_24h
  //     ).toLocaleString();
  //     data[i].circulating_supply = Math.round(
  //       data[i].circulating_supply
  //     ).toLocaleString();
  //   }
  // }
  // Format the data before rendering
  // Format the data before rendering
  const formattedData =
    data?.map((item) => {
      const usd = item.quote?.USD;
      if (!usd) return item;

      // Helper function to safely format numbers
      const safeFormat = (value, decimals = 2) => {
        return value != null ? Number(value).toFixed(decimals) : "0.00";
      };

      const safeRound = (value) => {
        return value != null ? Math.round(Number(value)).toLocaleString() : "0";
      };

      return {
        ...item,
        num_market_pairs:
          usd.volume_24h != null && usd.price != null
            ? Math.round(usd.volume_24h / usd.price).toLocaleString()
            : "0",
        quote: {
          ...item.quote,
          USD: {
            ...usd,
            price:
              usd.price != null && usd.price > 1
                ? Number(usd.price)
                    .toFixed(2)
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                : usd.price != null
                ? Number(usd.price).toFixed(4)
                : "0.0000",
            percent_change_24h: safeFormat(usd.percent_change_24h),
            percent_change_7d: safeFormat(usd.percent_change_7d),
            market_cap: safeRound(usd.market_cap),
            volume_24h: safeRound(usd.volume_24h),
          },
        },
        circulating_supply: safeRound(item.circulating_supply),
      };
    }) || [];

  if (!data || data.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">No data available</div>
    );
  }
  // Loading skeleton component
  if (loading || !data || data.length === 0) {
    return (
      <tbody>
        {[...Array(8)].map((_, index) => (
          <tr key={index} className="animate-pulse border-b">
            <td className="px-4 py-2">
              <div className="h-4 w-6 bg-gray-200 rounded"></div>
            </td>
            <td className="px-4 py-2">
              <div className="h-4 w-24 bg-gray-200 rounded"></div>
            </td>
            <td className="px-4 py-2">
              <div className="h-4 w-20 bg-gray-200 rounded"></div>
            </td>
            {/* 24h% on mobile */}
            <td className="px-4 py-2 md:hidden">
              <div className="h-4 w-12 bg-gray-200 rounded"></div>
            </td>
            {/* 7d% on desktop */}
            <td className="px-4 py-2 max-md:hidden">
              <div className="h-4 w-12 bg-gray-200 rounded"></div>
            </td>
            {/* Market Cap */}
            <td className="px-4 py-2 max-md:hidden">
              <div className="h-4 w-28 bg-gray-200 rounded"></div>
            </td>
            {/* Volume */}
            <td className="px-4 py-2 max-md:hidden">
              <div className="h-4 w-24 bg-gray-200 rounded"></div>
            </td>
            {/* Circulating Supply */}
            <td className="px-4 py-2 max-md:hidden">
              <div className="h-4 w-32 bg-gray-200 rounded"></div>
            </td>
          </tr>
        ))}
      </tbody>
    );
  }
  return (
    <div className="flex flex-col md:items-center justify-center w-6/6 md:mt-1 overflow-x-scroll">
      <table className="md:w-11/12 overflow-x-auto rounded-sm">
        <TableHeader />
        <tbody>
          {formattedData.map((coin, index) => (
            <tr key={coin.id} className="hover:bg-gray-50">
              <td className="px-4 py-2 border-b text-start">{index + 1}</td>
              <td className="px-4 py-2 border-b font-medium text-start">
                {coin.name}
              </td>
              <td className="px-4 py-2 border-b text-right">
                ${coin.quote.USD.price}
              </td>
              {/* Show 24h% on mobile, 7d% on desktop */}
              <td
                className={`px-4 py-2 border-b text-right md:hidden ${
                  parseFloat(coin.quote.USD.percent_change_24h) >= 0
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {coin.quote.USD.percent_change_24h}%
                {parseFloat(coin.quote.USD.percent_change_24h) >= 0
                  ? UpSvg
                  : DownSvg}
              </td>
              <td
                className={`px-4 py-2 border-b text-right max-md:hidden ${
                  parseFloat(coin.quote.USD.percent_change_7d) >= 0
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {coin.quote.USD.percent_change_7d}%
                {parseFloat(coin.quote.USD.percent_change_24h) >= 0
                  ? UpSvg
                  : DownSvg}
              </td>
              {/* Hide these columns on mobile */}
              <td className="px-4 py-2 border-b text-right max-md:hidden">
                ${coin.quote.USD.market_cap}
              </td>
              <td className="px-4 py-2 border-b text-right max-md:hidden">
                ${coin.quote.USD.volume_24h}
              </td>
              <td className="px-4 py-2 border-b text-right max-md:hidden">
                {coin.circulating_supply} {coin.symbol}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
