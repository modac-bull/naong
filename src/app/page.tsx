'use client'

import { css } from 'twin.macro'

import { Button } from '@/components/Button'

const MainPage = () => {
  return (
    <div
      css={css`
        border: 1px solid red;
      `}
    >
      메인
      <Button>버튼</Button>
    </div>
  )
}

export default MainPage
