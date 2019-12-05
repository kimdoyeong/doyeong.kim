import React from "react"
import styled, { css } from "styled-components"
import { Motion, spring } from "react-motion"
import { useSelector } from "react-redux"
import { RootState } from "../../../store/reducer"
import Button from "../../Form/Button"
import MultiLanguage from "../../MultiLanguage"
import { push } from 'gatsby'
interface WrapProps {
    image?: string
}
const Wrap = styled.div<WrapProps>`
  position: fixed;
  z-index: 3000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
  .modal {
    background: #333;
    width: 760px;
    margin: 0 auto;
    max-height: 70vh;
    overflow-y: auto;
    border-radius: 10px;
    box-shadow: 3px 3px 5px -1px rgba(0, 0, 0, 0.3);
    position: relative;
    &::-webkit-scrollbar {
      display: none;
    }
    & > button.go {
      position: absolute;
      top: 1em;
      right: 1em;
    }
    ${props =>
        props.image &&
        css`
        .image {
          height: 200px;
          background: url(${props.image}) no-repeat;
          background-size: cover;
          background-position: center;
        }
      `}
    .contents {
      padding: 1em 2em;

      & > h1.title {
        font-size: 3em;
        margin-top: 0;
        margin-bottom: 1rem;
      }
      & > p.date {
        margin-top: 0;
      }
    }
  }
`

interface PortfolioModalProps {
    title: string
    date: string
    contents: string
    image?: string
    show?: boolean
    en?: any
    slug: any
    onClose?(): any
}
function PortfolioModal({
    title,
    date,
    contents,
    image,
    show,
    onClose,
    en,
    slug
}: PortfolioModalProps) {
    const { lang } = useSelector((state: RootState) => state.Language)
    if (!show) return null
    const modal = ({ opacity, scale }: any) => (
        <Wrap image={image} onClick={onClose} style={{ opacity }}>
            <div
                className="modal"
                onClick={e => e.stopPropagation()}
                style={{ transform: `scale(${scale})` }}
            >
                <Button className="go" onClick={() => push(slug)}><MultiLanguage ko="페이지로 이동" en="Go to Page" /></Button>
                <div className="image" />
                <div className="contents">
                    <h1 className="title">{title}</h1>
                    <p className="date">{date}</p>
                    <div
                        className="_content_article_"
                        dangerouslySetInnerHTML={{
                            __html: en && lang === "en" ? en : contents,
                        }}
                    />
                </div>
            </div>
        </Wrap>
    )
    return (
        <Motion
            defaultStyle={{ opacity: 0, scale: 1.5 }}
            style={{ opacity: spring(1), scale: spring(1) }}
        >
            {modal}
        </Motion>
    )
}

export default PortfolioModal
