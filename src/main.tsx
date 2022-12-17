import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './assets/pages/App'

import GlobalStyles from "./stylesGlobal";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
)
