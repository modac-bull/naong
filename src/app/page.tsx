'use client'

import { styled } from 'twin.macro'

import Area from '@/components/layouts/Area'
import { MainVisual } from '@/components/pages/main/MainVisual'

const MainPage = () => {
  return (
    <div>
      <MainVisual />
      <section>
        <Area>
          <div tw="grid grid-cols-4">
            <Box tw="bg-primary-40" />
            <Box tw="bg-secondary-40" />
            <Box tw="bg-primary-90" />
            <Box tw="bg-tertiary-90" />
          </div>
        </Area>
      </section>
      <section tw="h-[100vh] bg-schemes-light-inversePrimary flex items-center justify-center text-center">
        <Area>2번째 섹션</Area>
      </section>
      <section tw="h-[100vh] bg-schemes-light-medium-contrast-surfaceContainerHighest flex items-center justify-center text-center">
        <Area>3번째 섹션</Area>
      </section>
      <section tw="h-[100vh] bg-schemes-light-secondaryFixed flex items-center justify-center text-center">
        <Area>4번째 섹션</Area>
      </section>
    </div>
  )
}

export default MainPage

const Box = styled.div`
  min-width: 20px;
  height: 500px;
`
