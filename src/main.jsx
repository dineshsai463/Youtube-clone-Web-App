import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ReduxProvider from './redux-store/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <ReduxProvider>   
    <App />
    </ReduxProvider>
 ,
)
