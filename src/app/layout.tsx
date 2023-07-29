import './globals.css'
import { Providers } from './providers'
import type { Metadata } from 'next'
import { Header, Footer } from '@/components/navigation'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Amiruddin Irsyad',
  description: "I’m Amir, a software developer from Malang, Indonesia. I’ve been learning as a professional since 2015 and sharing my programming knowledge in my spare time.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Header/>
          {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  )
}
