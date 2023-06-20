import Link from "next/link"
import Title from "./components/title"

export function Container({ url, title, hero }) {
  return (
    <Link href={url} className="home-action">
      <div className="hidden">sadffjndkjfsndfsknf</div>
      <div className='text-xl	font-semibold pb-1'>{title}</div>
      <div className='text-xs	font-medium text-slate-400'>{hero}</div>
    </Link>
  )
}

export default async function Page() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between py-10'>
      <div className='flex justify-between w-5/6 lg:mt-14'>
        <div className='w-40'>APIs by CoinAPI</div>
        <Title />
        <div className='w-40 text-right'>A Project by Arsh</div>
      </div>
      <div className="lg:flex">
        <Container url='explore' title='Explore' hero='Explore the crypto space' />
        <Container url='portfolio' title='Portfolio' hero='Wanna know what projects I am currently invested in?' />
        <Container url='interests' title='Interests' hero='Have a quick look at the projects I&apos;m interested in' />
        <Container url='bonus' title='100x' hero='Projects I believe could give you a 1000% return' />
      </div>
    </main>
  )
}