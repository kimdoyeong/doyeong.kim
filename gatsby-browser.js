/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react"

import { Provider } from "react-redux"
import createStore from "./src/store/createStore"

export function wrapRootElement({ element }) {
  const store = createStore()

  //eslint-disable-next-line
  return <Provider store={store}>{element}</Provider>
}
