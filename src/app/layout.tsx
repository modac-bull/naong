'use client'

import { Header } from '@/components/ui/Header'

import GlobalStyles from '@/styles/GlobalStyles'

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <GlobalStyles />
        <Header isFixed />
        {props.children}
      </body>
    </html>
  )
}
