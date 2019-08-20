// *******thunk中间件
// import {createStore , applyMiddleware  ,compose} from 'redux'
// import reducer from './reducer'
// import thunk from 'redux-thunk'

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?
// window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose

// const enhancer = composeEnhancers(applyMiddleware(thunk))

// const store = createStore(
//     reducer,
//     enhancer
// )
// export default store

// ********saga中间件


import {createStore , applyMiddleware  ,compose} from 'redux'
import reducer from './reducer'
import createSagaMiddleware from 'redux-saga'
import mySagas from './sagas';

const sagaMiddleware = createSagaMiddleware();


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))

const store = createStore(
    reducer,
    enhancer
)
sagaMiddleware.run(mySagas)
export default store

