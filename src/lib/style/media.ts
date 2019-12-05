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

export const mobile = makeMedia("max-width: 480px")
export const tablet = makeMedia("max-width: 768px")
export const smallDesktop = makeMedia("max-width: 1024px");
export const desktop = makeMedia("min-width: 1280px");
export const fhd = makeMedia("min-width: 1900px");
export const uhd = makeMedia("min-width: 2560px")
