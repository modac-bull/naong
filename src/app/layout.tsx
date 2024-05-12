'use client'

import GlobalStyles from '@/styles/GlobalStyles'
export default function RootLayout(props: { children: React.ReactNode }) {
  console.log('dd')
  console.log('error?')

  return (
    <html lang="en">
      <body>
        <GlobalStyles />
        {props.children}
      </body>
    </html>
  )
}
