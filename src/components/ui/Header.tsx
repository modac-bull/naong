import React from 'react'
import { css, styled, theme } from 'twin.macro'

import Area from '../layouts/Area'

interface Props {
  isFixed?: boolean
}

export const Header = ({ isFixed = false }) => {
  return (
    <HeaderContainer>
      {/* 로고 */}
      <Inner isFixed={isFixed}>
        <Area tw="flex items-center justify-between">
          <LogoWrapper>Naong & Ingmu</LogoWrapper>
          <Menu>
            <MenuItem>About Me</MenuItem>
            <MenuItem>Artwork</MenuItem>
            <MenuItem>Contact</MenuItem>
          </Menu>
        </Area>
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
  // 임시 배경
  background-color: ${theme`colors.schemes.light.secondaryFixedDim`};
`

const HeaderContainer = styled.header`
  height: ${theme`variables.headerHeightMobile`};
  @media (min-width: ${theme`screens.md`}) {
    height: ${theme`variables.headerHeight`};
  }
`

const Inner = styled.div<{ isFixed: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${theme`variables.headerHeightMobile`};
  @media (min-width: ${theme`screens.md`}) {
    height: ${theme`variables.headerHeight`};
  }
  border-bottom: 1px solid ${theme`colors.schemes.light.outlineVariant`};
  background-color: ${theme`colors.schemes.light.background`};
  ${({ isFixed }) =>
    isFixed &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 100;
    `}
`

const Menu = styled.ul`
  display: flex;
  align-items: center;
  gap: 15px;
  @media (min-width: ${theme`screens.md`}) {
    gap: 60px;
  }
`

const MenuItem = styled.li`
  cursor: pointer;
  font-size: 16px;
  font-weight: 300;
  @media (min-width: ${theme`screens.md`}) {
    font-size: 18px;
    gap: 60px;
  }
`
