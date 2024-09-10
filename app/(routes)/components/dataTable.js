import Link from "next/link"
import TableHeader from "./tableHeader"

// SVGS
const UpSvg = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill inline" viewBox="0 0 16 16">
    <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
</svg>

const DownSvg = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill inline" viewBox="0 0 16 16">
    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
</svg>

export default function DataTable({ data }) {

    if (data) {
        for (var i = 0; i < data.length; i++) {
            data[i].num_market_pairs = Math.round(data[i].quote.USD.volume_24h / data[i].quote.USD.price).toLocaleString()
            if (data[i].quote.USD.price > 1) {
                data[i].quote.USD.price = data[i].quote.USD.price.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            } else {
                data[i].quote.USD.price = data[i].quote.USD.price.toFixed(4).toLocaleString()
            }
            data[i].quote.USD.percent_change_24h = data[i].quote.USD.percent_change_24h.toFixed(2)
            data[i].quote.USD.percent_change_7d = data[i].quote.USD.percent_change_7d.toFixed(2)
            data[i].quote.USD.market_cap = Math.round(data[i].quote.USD.market_cap).toLocaleString()
            data[i].quote.USD.volume_24h = Math.round(data[i].quote.USD.volume_24h).toLocaleString()
            data[i].circulating_supply = Math.round(data[i].circulating_supply).toLocaleString()
        }
    }

    return (
        <div className="flex flex-col md:items-center justify-center w-6/6 md:mt-1 overflow-x-scroll">
            <table className="md:w-11/12 overflow-x-auto rounded-sm">
                <TableHeader />
                <tbody>
                    {data?.map((coin, id) => (
                        <tr key={id} className="hover:bg-slate-50">
                            <td className="text-start">{id + 1}</td>
                            <td className="text-start flex flex-col justify-center">
                                <span>{coin.name}</span>
                                <span className="text-xs text-slate-500">{coin.symbol}</span>
                            </td>
                            <td>${coin.quote.USD.price}</td>
                            <td className={coin.quote.USD.percent_change_7d > 0 ? 'text-green-500 max-md:hidden' : 'text-red-500 max-md:hidden'}>
                                {coin.quote.USD.percent_change_7d > 0 ? UpSvg : DownSvg}
                                {coin.quote.USD.percent_change_7d}%
                            </td>
                            <td className={coin.quote.USD.percent_change_24h > 0 ? 'text-green-500 md:hidden' : 'text-red-500 md:hidden'}>
                                {coin.quote.USD.percent_change_24h > 0 ? UpSvg : DownSvg}
                                {coin.quote.USD.percent_change_24h}%
                            </td>
                            <td className="max-md:hidden">${coin.quote.USD.market_cap}</td>
                            <td className="max-md:hidden flex-col justify-center flex">
                                <span>${coin.quote.USD.volume_24h}</span>
                                <span className="text-xs text-slate-500">{coin.num_market_pairs} {coin.symbol}</span>
                            </td>
                            <td className="max-md:hidden">{coin.circulating_supply} {coin.symbol}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
} 