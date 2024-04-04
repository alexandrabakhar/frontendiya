import React from 'react'
import ReactDOM from 'react-dom/client'

import '@/app/index.css'
import { MainLayout } from './layouts/MainLayout'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MainLayout />
  </React.StrictMode>,
)
