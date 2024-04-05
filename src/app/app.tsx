import ReactDOM from 'react-dom/client'
import './app.css'
import { MainLayout } from './layouts/MainLayout'
import { PROVIDERS, ProviderComposer } from './providers'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ProviderComposer providers={PROVIDERS}>
    <MainLayout />
  </ProviderComposer>,
)
