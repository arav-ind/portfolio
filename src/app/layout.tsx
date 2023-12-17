import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ColorChanger from '@/components/ColorChanger'
import Modal from '@/components/Modal'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aravind D | Software Engineer',
  description: 'Aravind\'s Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className= {`${inter.className} min-h-screen no-scrollbar`}>
        <Modal />
        {children}
        <ColorChanger />
      </body>
    </html>
  )
}
