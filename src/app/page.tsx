'use client'

import { css, styled, theme } from 'twin.macro'

const MainPage = () => {
  return (
    <div>
      <Header>
        {/* 로고 */}
        <Inner>
          <LogoWrapper>로고 영역</LogoWrapper>
          <Menu>
            <MenuItem>메뉴1</MenuItem>
            <MenuItem>메뉴2</MenuItem>
          </Menu>
        </Inner>
      </Header>
      <section tw="max-w-[1200px] mx-[auto]">
        <div tw="grid grid-cols-4">
          <Box tw="bg-primary-40" />
          <Box tw="bg-secondary-40" />
          <Box tw="bg-primary-90" />
          <Box tw="bg-tertiary-90" />
        </div>
      </section>
    </div>
  )
}

export default MainPage

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 30px;
  background-color: ${theme`colors.neutral-variant.90`};
`

const Header = styled.header`
  border-bottom: 1px solid ${theme`colors.schemes.light.outlineVariant`};
`

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* gutter */
  padding: 0 30px;
  height: 50px;
  max-width: 1200px;
  margin: 0 auto;
`

const Menu = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
  li {
  }
`

const MenuItem = styled.li`
  /* color: ${theme`colors.primary`}; */
  font-weight: 600;
  cursor: pointer;
`

const Box = styled.div`
  min-width: 20px;
  height: 500px;
`
