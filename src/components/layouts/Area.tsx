import { styled, theme } from 'twin.macro'

interface Props {
  className?: string
  children: React.ReactNode
}

export default function Area({ className, children }: Props) {
  return (
    <AreaContainer className={className}>
      <p>글꼴 테스트</p>
      {children}
    </AreaContainer>
  )
}

const AreaContainer = styled.div`
  width: 100%;
  padding: 0 ${theme`variables.gutterMobile`};
  margin: 0 auto;

  @media (min-width: ${theme`screens.md`}) {
    padding: 0 ${theme`variables.gutterPc`};
  }

  @media (min-width: ${theme`screens.lg`}) {
    max-width: calc(
      ${theme`variables.maxWidth`} + (${theme`variables.gutterPc`} * 2)
    );
  }
`
