import Title from "@/app/(routes)/components/title";
import DataTable from "../components/dataTable";

const HOSTNAME = 'https://pro-api.coinmarketcap.com'
const API_KEY = '8a64fa8e-4a97-4783-bfc0-7e84c7a28ebb'

const options = {
    headers: {
        'X-CMC_PRO_API_KEY': API_KEY
    },
}

async function getPortfolio() {
    const PORTFOLIO = [{
        'USDT': 825,
        'XRP': 52,
        'ZKS': 8202,
        'SNX': 2586,
        'CRV': 6538,
        'MANA': 1966,
        'SHIB': 5994,
        'LINK': 1975,
        'DOT': 6636,
        'ATOM': 3794,
        'SOL': 5426,
        'GFI': 13967,
        'AVAX': 5805,
        '1INCH': 8104,
        'IMX': 10603,
        'WOO': 7501,
        'SPHERE': 18945,
        'NEAR': 6535,
        'PYR': 9308,
        'OCEAN': 3911,
        'DYDX': 11156,
        'TRAC': 2467,
        'GRT': 6719,
        'ORAI': 7533,
        'AGIX': 2424,
        'OP': 11840,
        'FET': 3773,
        'GALA': 7080,
        'SCRT': 5604,
        'APE': 18876,
        'RUNE': 4157,
        'CNS': 5963,
        'SAND': 6210,
        'ALI': 16876,
        'CANTO': 21516,
        'HBAR': 4642
    }]
    let list = []
    PORTFOLIO.map((item) => (
        list.push(Object.values(item))
    ))
    const string = list.toString()
    const res = await fetch(`${HOSTNAME}/v2/cryptocurrency/quotes/latest?id=${string}`, options)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

export default async function Portfolio() {
    const portfolio = await getPortfolio()
    let dataArr = Object.values(portfolio.data)

    return (
        <div>
            <Title title='My Portfolio' />
            <DataTable data={dataArr} />
        </div>
    )
}