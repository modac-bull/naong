'use client'

import React, { useEffect, useState } from 'react'
import { useWindowScroll } from 'react-use'
import tw, { css, styled, theme } from 'twin.macro'

import Area from '../layouts/Area'

interface Props {
  isFixed?: boolean
}

export const Header = ({ isFixed = false }: Props) => {
  const { y } = useWindowScroll()
  const isScrolled = y > 0
  console.log('isScrolled', isScrolled)

  return (
    <HeaderContainer>
      {/* 로고 */}
      <Inner isFixed={isFixed} isScrolled={isScrolled}>
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

const Inner = styled.div<{ isFixed: boolean; isScrolled: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${theme`variables.headerHeightMobile`};
  @media (min-width: ${theme`screens.md`}) {
    height: ${theme`variables.headerHeight`};
  }
  ${({ isScrolled }) =>
    isScrolled &&
    css`
      height: calc(${theme`variables.headerHeightMobile`} - 10px);
      @media (min-width: ${theme`screens.md`}) {
        height: calc(${theme`variables.headerHeight`} - 40px);
      }
    `}

  border-bottom: 1px solid ${theme`colors.schemes.light.outlineVariant`};
  background-color: ${theme`colors.schemes.light.background`};
  transition: height 0.5s;
  ${({ isFixed }) =>
    isFixed &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 100;
    `};
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
