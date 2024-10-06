import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Zion Advocacy Platform',
    template: '%s | Zion Advocacy Platform',
  },
  description: 'A platform for sharing and advocating community stories',
  keywords: ['advocacy', 'community', 'stories', 'platform'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name or Organization',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    siteName: 'Zion Advocacy Platform',
    title: 'Zion Advocacy Platform',
    description: 'A platform for sharing and advocating community stories',
    images: [
      {
        url: 'https://your-domain.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zion Advocacy Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Advocacy Platform',
    description: 'A platform for sharing and advocating community stories',
    images: ['https://your-domain.com/twitter-image.jpg'],
    creator: '@yourTwitterHandle',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
