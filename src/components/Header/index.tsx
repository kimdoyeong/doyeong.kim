import React from "react"
import styled, { css } from "styled-components"

import github from "../../assets/github.svg"
import logo from "../../assets/doyeong.kim.svg"
import useImageCode from "../../lib/image/useImageCode"
import { tablet, uhd, smallDesktop, desktop } from "../../lib/style/media"
import LanguageSelector from "../MultiLanguage/LanguageSelector"
import LinkButton from "./Link"
import MultiLanguage from "../MultiLanguage"

const Wrap = styled.header`
    height: 100vh;
    overflow: hidden;
    position: relative;
    background: #1f1f1f;
    color: white;
    text-shadow: 0 0 3px rgba(0,0,0,0.5);
    box-shadow: 10px 0 5px -1px rgba(0,0,0,0.3);
    .contents {
        position: absolute;
        top: 20%;
        left: 10vw;
        right: 10vw;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        ${tablet(css`
          left: 10vw;
          right: 10vw;
        `)}
        ${smallDesktop(css`
          left: 6vw;
          right: 6vw;
        `)}
        ${desktop(css`
          left: 20vw;
          right: 20vw;
        `)}
        ${uhd(css`
          left: 30vw;
          right: 30vw;
        `)}
        & > * {
            background: rgba(0,0,0,.3);
            padding: .2em;
        }
        .title {
            background: rgba(0,0,0,.5);
            padding: 1em;
            margin: 1em 0;
            h1 {
                font-size: 3rem;
                margin: 0;
                font-weight: lighter;
            }
            .logo {
                max-width: 100px;
            }
        }
        .buttons {
            padding: 1em;
        }
    }
`
const Image = styled.div<{ img: any }>`
  height: 100vh;
  width: auto;
  max-width: 50vw;
  box-shadow: 5px 5px 5px -1px rgba(0, 0, 0, 1);
  background: url(${props => props.img}) no-repeat;
  background-size: cover;
  background-position: center;

  ${tablet(css`
    max-width: 100vw;
  `)}
`

function Header() {
  const code = useImageCode()
  return (
    <Wrap>
      <Image img={code.src} aria-label="Coding Desk" />
      <div className="contents">
        <LanguageSelector />
        <div className="title">
          <img src={logo} alt="Logo" className="logo" />
          <h1>Doyeong Kim</h1>
        </div>
        <p>
          <MultiLanguage
            en="Web Developer @ Sunrin Internet High School."
            ko="웹 개발자 @ 선린인터넷고등학교"
          />
        </p>
        <div className="buttons">
          <LinkButton
            to="http://git.doyeong.dev"
            image={github}
            name="GitHub"
          />
        </div>
      </div>
    </Wrap>
  )
}

export default Header
