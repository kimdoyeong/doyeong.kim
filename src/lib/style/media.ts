import { css } from "styled-components"

function makeMedia(condition: string) {
  return (code: any) => {
    return css`
      @media (${condition}) {
        ${code}
      }
    `
  }
}

export const mobile = makeMedia("max-width: 640px")
export const tablet = makeMedia("max-width: 720px")
export const uhd = makeMedia("min-width: 2560px")
