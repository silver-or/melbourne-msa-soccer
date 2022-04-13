import {configureStore} from "@reduxjs/toolkit"
import {createWrapper} from "next-redux-wrapper"
import createSagaMiddleware from "@redux-saga/core"
import {rootSaga} from "./sagas"
import rootReducer from "./reducers"

const isDev = process.env.NODE_ENV === 'development'
const isProd = process.env.NODE_ENV === 'production'

const sagaMiddleware = createSagaMiddleware()

export const createStore = () => {
    const store = configureStore({ // 상태 변경
        reducer : rootReducer,
        devTools : isDev,
        middleware : [sagaMiddleware] // detection 감지
    })
    // sagaMiddleware.run(rootSaga)
    return store
}

export const wrapper = createWrapper(createStore, {debug : isDev})
export default wrapper