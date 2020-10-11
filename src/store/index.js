import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'

//import thunk from 'redux-thunk'

//saga---start
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas'
const sagaMiddleware = createSagaMiddleware();
//saga---end



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

//const enchancer = composeEnhancers(applyMiddleware(thunk))

//saga---start
const enchancer = composeEnhancers(applyMiddleware(sagaMiddleware))
//saga---end

const store = createStore(
    reducer,
    enchancer
)
//saga---start
sagaMiddleware.run(mySaga)
//saga---end

export default store