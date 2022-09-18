import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './App'
import './index.css'

const initialState = { user: null, progress: 1, totalAmount: 0 }

const reducer = (state, action) => {
  if(action.type === 'SET_USER') return {...state, user: action.currentUser}
  if(action.type === 'SET_PROGRESS') return {...state, progress: action.currentProgress}
  return state
}

const store = createStore(reducer, initialState)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
