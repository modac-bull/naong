import React from 'react'
import { styled, theme } from 'twin.macro'

export const Header = () => {
  return (
    <HeaderContainer>
      {/* 로고 */}
      <Inner>
        <LogoWrapper>Naong & Ingmu</LogoWrapper>
        <Menu>
          <MenuItem>메뉴1</MenuItem>
          <MenuItem>메뉴2</MenuItem>
        </Menu>
      </Inner>
    </HeaderContainer>
  )
}

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 50px;
  background-color: ${theme`colors.neutral-variant.90`};
`

const HeaderContainer = styled.header`
  border-bottom: 1px solid ${theme`colors.schemes.light.outlineVariant`};
`

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* gutter */
  padding: 0 30px;
  height: 80px;
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
