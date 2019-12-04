import React from "react"

import { Provider } from "react-redux"
import createStore from "./src/store/createStore"

/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

export function wrapRootElement({ element }) {
  const store = createStore()

  //eslint-disable-next-line
  return <Provider store={store}>{element}</Provider>
}
