import { type Metadata } from 'next'
import { GeistSans } from "geist/font/sans";
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: {
    template: '%s - teTrips',
    default: 'teTrips - 여행 계획',
  },
  description: '여행 계획은 역시 테트립스',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={GeistSans.className}>
      <body>{children}</body>
    </html>
  )
}
