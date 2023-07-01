const HOSTNAME = 'https://pro-api.coinmarketcap.com'
const API_KEY = '8a64fa8e-4a97-4783-bfc0-7e84c7a28ebb'

// We can pass headers on a get request using two ways:
// axios.defaults.headers.get['X-CoinAPI-Key'] = API_KEY;
const options = {
    headers: {
        'X-CMC_PRO_API_KEY': API_KEY
    },
}

async function getGlobalData() {
    const res = fetch(`${HOSTNAME}/v1/global-metrics/quotes/latest`)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return (await res).json()
}

export default async function GlobalData() {
    const globalData = await getGlobalData()
    return (
        <div>
            <div>Today&apos;s Cryptocurrency Prices by Market Cap</div>
        </div>
    )
}