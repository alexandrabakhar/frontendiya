import { EmptyPage, MainPage } from '@/pages'
import { Header } from '@/widgets'

export const MainLayout = () => {
  const isUser = true
  return (
    <>
      <Header />
      {isUser ? <MainPage /> : <EmptyPage contentType='initial' />}
    </>
  )
}
