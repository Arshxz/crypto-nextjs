import Link from "next/link"
import Title from "./(routes)/components/title"

const arrowRight = <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
</svg>

export function Container({ url, title, hero }) {
  return (
    <Link href={url} className="group home-action">
      <div className='flex items-center text-xl	font-semibold pb-1'>
        <div>{title}</div>
        <div className="ml-2 pt-1 group-hover:translate-x-1 motion-safe:transition">{arrowRight}</div>
      </div>
      <div className='text-xs	font-medium text-slate-400'>{hero}</div>
    </Link>
  )
}

export default async function Page() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between py-10'>
      <div className='flex justify-between w-5/6 lg:mt-14'>
        <div className='w-40'>Powered by <span className="text-blue-500"><Link href='https://coinmarketcap.com/' target='_blank'>CoinMarketCap</Link></span></div>
        <Title />
        <div className='w-40 text-right'>A Project by <span className="text-blue-500"><Link href='https://github.com/Arshxz' target='_blank'>Arsh</Link></span></div>
      </div>
      <div className="lg:flex">
        <Container url='explore' title='Explore' hero='Explore the crypto space' />
        <Container url='portfolio' title='Portfolio' hero='Wanna know what projects I am currently invested in?' />
        <Container url='interests' title='Interests' hero='Have a quick look at the projects I&apos;m interested in' />
        <Container url='bonus' title='100x' hero='Projects I believe could give you a 1000% return' />
      </div>
    </main >
  )
}