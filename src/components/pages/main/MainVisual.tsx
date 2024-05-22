import { css } from '@emotion/react'
import Image from 'next/image'
import React from 'react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { styled, theme } from 'twin.macro'

import Area from '@/components/layouts/Area'

const MAIN_VISUAL_DATA = [
  {
    title: '귀엽고 따뜻한 뜨개세상, </br> 나옹&잉무와 함께해요!',
    description: '나옹앤잉무 - 따뜻한 뜨개작가/뜨개인형, 뜨개가방',
    img_url:
      'https://images.unsplash.com/photo-1632649027900-389e810204e6?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: '나옹',
    description: '잉무를 키운다고 생각하는 도도한 고양이고 싶은 언니 토끼',
    img_url:
      'https://images.unsplash.com/photo-1557303696-f0a415dc1b3e?q=80&w=2448&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: '잉무',
    description: '똑부러지는 듯 보이지만 순둥한 동생 화이트탄 진도예드',
    img_url:
      'https://images.unsplash.com/photo-1550376026-7375b92bb318?q=80&w=3108&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
]

export const MainVisual = () => {
  return (
    <MainVisualContainer>
      <SwiperWrapper
        modules={[Pagination, EffectFade, Autoplay]}
        effect={'fade'}
        loop={true}
        autoplay={{
          delay: 4000,
        }}
        pagination={{
          clickable: true,
        }}
        fadeEffect={{ crossFade: true }}
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)}
      >
        {MAIN_VISUAL_DATA.map((main, idx) => (
          <CustomSwiperSlide key={idx}>
            <BgDim />
            <Image
              fill
              alt={'main visual'}
              src={main.img_url}
              css={css`
                object-fit: cover;
                z-index: -1;
              `}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII="
            />
            <Area>
              <GridLayout>
                <div>
                  <Title dangerouslySetInnerHTML={{ __html: main.title }} />
                  <Description>{main.description}</Description>
                </div>
              </GridLayout>
            </Area>
          </CustomSwiperSlide>
        ))}
      </SwiperWrapper>
    </MainVisualContainer>
  )
}

const MainVisualContainer = styled.section`
  background-color: ${theme`colors.schemes.light.inversePrimary`};
`

const SwiperWrapper = styled(Swiper)`
  .swiper-pagination {
    padding: 50px 0;
  }
  .swiper-pagination-bullet {
    margin: 0 10px !important;
    opacity: 1;
    background-color: ${theme`colors.schemes.light.onPrimary`};
    &.swiper-pagination-bullet-active {
      background-color: ${theme`colors.schemes.light.primary`};
    }
  }
`
const CustomSwiperSlide = styled(SwiperSlide)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: calc(100vh - env(safe-area-inset-bottom));
`
const BgDim = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${theme`colors.schemes.dark.inversePrimary`};
  opacity: 0.25;
  z-index: 0;
`

const Title = styled.div`
  font-size: 50px;
  font-weight: 700;
  color: ${theme`colors.schemes.light.onPrimary`};
`

const Description = styled.p`
  font-size: 20px;
  font-weight: 300;
  color: ${theme`colors.schemes.light.onPrimary`};
`

const GridLayout = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  padding: 0 20px;
  @media (min-width: ${theme`screens.md`}) {
    padding: 0 60px;
    grid-template-columns: 1fr 1fr;
  }
`
