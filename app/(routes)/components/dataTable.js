import Link from "next/link"
import TableHeader from "./tableHeader"

// SVGS
const UpSvg = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill inline" viewBox="0 0 16 16">
    <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
</svg>

const DownSvg = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill inline" viewBox="0 0 16 16">
    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
</svg>

export default function DataTable({ dataa }) {

    if (dataa) {
        for (var i = 0; i < dataa.length; i++) {
            dataa[i].num_market_pairs = Math.round(dataa[i].quote.USD.volume_24h / dataa[i].quote.USD.price).toLocaleString()
            if (dataa[i].quote.USD.price > 1) {
                dataa[i].quote.USD.price = dataa[i].quote.USD.price.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            } else {
                dataa[i].quote.USD.price = dataa[i].quote.USD.price.toFixed(4).toLocaleString()
            }
            dataa[i].quote.USD.percent_change_7d = dataa[i].quote.USD.percent_change_7d.toFixed(2)
            dataa[i].quote.USD.market_cap = Math.round(dataa[i].quote.USD.market_cap).toLocaleString()
            dataa[i].quote.USD.volume_24h = Math.round(dataa[i].quote.USD.volume_24h).toLocaleString()
            dataa[i].circulating_supply = dataa[i].circulating_supply.toLocaleString()
        }
    }

    return (
        <div className="flex flex-col items-center justify-center mt-20">
            <div className="w-11/12 ml-5 text-2xl pb-4 font-thin">Today&apos;s Cryptocurrency Prices by <span className="text-blue-500"><Link href='https://coinmarketcap.com/' target='_blank'>Market Cap</Link></span></div>
            <table>
                <TableHeader />
                <tbody>
                    {dataa?.map((coin, id) => (
                        <tr key={id}>
                            <td className="text-start">{id + 1}</td>
                            <td className="text-start flex flex-col justify-center">
                                <span>{coin.name}</span>
                                <span className="text-xs text-slate-500">{coin.symbol}</span>
                            </td>
                            <td>${coin.quote.USD.price}</td>
                            <td className={coin.quote.USD.percent_change_7d > 0 ? 'text-green-500' : 'text-red-500'}>
                                {coin.quote.USD.percent_change_7d > 0 ? UpSvg : DownSvg}
                                {coin.quote.USD.percent_change_7d}%
                            </td>
                            <td>${coin.quote.USD.market_cap}</td>
                            <td className="flex flex-col justify-center">
                                <span>${coin.quote.USD.volume_24h}</span>
                                <span className="text-xs text-slate-500">{coin.num_market_pairs} {coin.symbol}</span>
                            </td>
                            <td>{coin.circulating_supply} {coin.symbol}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

// 30216.695767306664	