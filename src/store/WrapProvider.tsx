import React from 'react'
import createStore from './createStore'
import { Provider } from 'react-redux'

function wrapProvider({ element }: any) {
    const store = createStore()

    //eslint-disable-next-line
    return <Provider store={store}>{element}</Provider>

}

export default wrapProvider;