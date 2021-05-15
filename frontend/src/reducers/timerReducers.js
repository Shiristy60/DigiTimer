import {
    LIST_HISTORY_REQUEST,
    LIST_HISTORY_SUCCESS,
    LIST_HISTORY_FAIL,
    ADD_TIMER_STATE_SUCCESS,
    ADD_TIMER_STATE_FAIL
} from '../constants/timerConstants'

export const timerStateReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_TIMER_STATE_SUCCESS:   // timestamp added successfully
            return { newState: action.payload } // fill the state of the application with the response fetched from the server
        case ADD_TIMER_STATE_FAIL:  // timestamp couldn't get added
            return { error: action.payload }
        default:
            return state
    }
}

export const listHistoryReducer = (state = { timerHistory: [] }, action) => {
    switch (action.type) {
        case LIST_HISTORY_REQUEST:  // request history from server
            return { loading: true }    // history is being loaded
        case LIST_HISTORY_SUCCESS:  // a succesful response from server
            return {
                loading: false, // history has been loaded, set loading to false
                timerHistory: action.payload    // fill the state of the application with the data fetched from the server
            }
        case LIST_HISTORY_FAIL: // error returned from server
            return { loading: false, error: action.payload }
        default:
            return state
    }
}