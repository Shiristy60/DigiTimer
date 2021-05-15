import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { listHistoryReducer, timerStateReducer } from './reducers/timerReducers'

const reducer = combineReducers({
    listHistory: listHistoryReducer,
    timerState: timerStateReducer
})
const initialState = {}

//redux-thunk middleware allows asynchronous use of dispatch.
const middleware = [thunk]

// applyMiddleware is used to create a store enhancer which applies the thunkMiddleware to the store's dispatch function.
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store