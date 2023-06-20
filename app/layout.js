import { Suspense } from 'react'
import './styles.scss'
import { Inter } from 'next/font/google'
import Loading from './loading'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Satoshi by Arsh',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='h-screen'>
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
      </body>
    </html>
  )
}
