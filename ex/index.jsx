import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import counterReducer from './counterReducer'
import Counter from './counter'

const reducers = combineReducers({
    counter: counterReducer
})

ReactDOM.render(
    <div>
        <Provider store={createStore(reducers)}>
            <Counter />
        </Provider>
    </div>
    ,document.getElementById('app')
)

