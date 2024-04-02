import React from 'react'
import ReactDOM from 'react-dom/client'

import '@/app/index.css'
import { MainPage } from '@/pages'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>,
)