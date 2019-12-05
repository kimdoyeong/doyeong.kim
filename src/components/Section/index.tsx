import React from "react"
import styled, { css } from "styled-components"
import { mobile } from "../../lib/style/media"

interface WrapProps {
  image?: string
  noPadding?: boolean
}
const Wrap = styled.div<WrapProps>`
  & > .contents {
    ${props =>
    !props.noPadding &&
    css`
        padding: 2.5em 3em;
      `}
    
    & > .title, .section-title {
      font-size: 3em;
      font-weight: lighter;
    }
    ${mobile(css`
      font-size: 14px;
    `)}
  }
  ${props =>
    props.image &&
    css`
      & > .image {
        position: relative;
        z-index: -1;
        height: 70vh;
        background: url(${props.image}) no-repeat;
        background-size: cover;
        background-position: center;
        box-shadow: 0 5px 5px -1px rgba(0, 0, 0, 0.7);
      }
    `}
`
type SectionProps = WrapProps & {
  children: React.ReactNode
}
function Section({ children, ...props }: SectionProps) {
  return (
    <Wrap {...props}>
      {props.image && <div className="image"></div>}
      <div className="contents">{children}</div>
    </Wrap>
  )
}

export default Section
