import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './App'
import './index.css'

const initialState = { user: null, progress: 1, totalAmount: 0, previewAmount: 14300, agregates: [], totalAgregates: 0 }

const reducer = (state, action) => {
  if(action.type === 'SET_USER') return {...state, user: action.currentUser}
  if(action.type === 'SET_PROGRESS') return {...state, progress: action.currentProgress}
  if(action.type === 'SET_TOTAL_AMOUNT') return {...state, totalAmount: action.currentTotalAmount}
  if(action.type === 'SET_PREVIEW_AMOUNT') return {...state, previewAmount: action.currentPreviewAmount}
  if(action.type === 'SET_AGREGATES') return {...state, agregates: action.currentAgregates}
  if(action.type === 'SET_TOTAL_AGREGATES') return {...state, totalAgregates: action.currentTotalAgregates}
  return state
}

const store = createStore(reducer, initialState)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
