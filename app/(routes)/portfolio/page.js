import Title from "@/app/(routes)/components/title";
import DataTable from "../components/dataTable";

// const HOSTNAME = 'https://rest.coinapi.io'
// const API_KEY = '6D14B43F-BF8A-4409-A159-02417459A254'
// /v1/ohlcv/BITSTAMP_SPOT_BTC_USD/latest?period_id=1DAY&limit=7

const HOSTNAME = 'https://pro-api.coinmarketcap.com'
const API_KEY = '8a64fa8e-4a97-4783-bfc0-7e84c7a28ebb'

const options = {
    headers: {
        // 'X-CoinAPI-Key': API_KEY
        'X-CMC_PRO_API_KEY': '8a64fa8e-4a97-4783-bfc0-7e84c7a28ebb'
    },
}

// /v2/cryptocurrency/info?id=1
// /v1/cryptocurrency/quotes/latest
// /v1/cryptocurrency/listings/latest
async function getBTCData() {
    const res = await fetch(`${HOSTNAME}/v1/cryptocurrency/listings/latest?limit=10`, options)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

export default async function Portfolio() {
    const data = []
    const BTCData = await getBTCData()

    const [btc] = await Promise.all([BTCData])
    data.push(btc)
    // console.log(btc)
    return (
        <div>
            <Title title='Portfolio' />
            <DataTable data={data} />
        </div>
    )
}