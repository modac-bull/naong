'use client'

import { Global } from '@emotion/react'
import React from 'react'
import tw, { GlobalStyles as BaseStyles, css, theme } from 'twin.macro'

const customStyles = css({
  body: {
    backgroundColor: theme`colors.schemes.light.background`,
    WebkitTapHighlightColor: theme`colors.schemes.light.scrim`,
    ...tw`antialiased`,
  },
})

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
)

export default GlobalStyles
