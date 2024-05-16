'use client'

import { Header } from '@/components/ui/Header'

import GlobalStyles from '@/styles/GlobalStyles'
import { pretendard } from '@/styles/fonts'

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${pretendard.variable}`}>
      <body>
        <GlobalStyles />
        <Header isFixed />
        {props.children}
      </body>
    </html>
  )
}
