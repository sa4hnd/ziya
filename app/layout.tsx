import type { Metadata } from 'next'
import { IBM_Plex_Sans_Arabic } from 'next/font/google'
import './globals.css'

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  weight: ['400', '600', '700'],
  subsets: ['arabic'],
})

export const metadata: Metadata = {
  title: 'ماموستایێ کیمیایێ',
  description: 'کۆرسێ کیمیایێ بۆ قوتابیێن پولا 12',
  openGraph: {
    title: 'ماموستایێ کیمیایێ',
    description: 'کۆرسێ کیمیایێ بۆ قوتابیێن پولا 12',
    images: [
      {
        url: '/teacher-portrait.png',
        width: 1200,
        height: 630,
        alt: 'ماموستایێ کیمیایێ',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ku" dir="rtl">
      <body className={ibmPlexSansArabic.className}>{children}</body>
    </html>
  )
}
