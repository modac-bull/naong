'use client'

import { styled } from 'twin.macro'

const MainPage = () => {
  return (
    <div>
      <section tw="max-w-[1200px] mx-[auto]">
        <div tw="grid grid-cols-4">
          <Box tw="bg-primary-40" />
          <Box tw="bg-secondary-40" />
          <Box tw="bg-primary-90" />
          <Box tw="bg-tertiary-90" />
        </div>
      </section>
      <section tw="h-[100vh]">2번째</section>
    </div>
  )
}

export default MainPage

const Box = styled.div`
  min-width: 20px;
  height: 500px;
`
