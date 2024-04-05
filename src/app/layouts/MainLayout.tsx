import { EmptyPage } from '@/pages/EmptyPage'
import { MainPage } from '@/pages/MainPage'
import { Header } from '@/widgets/Header'
import { useUserContext } from '@/entities/user'

export const MainLayout = () => {
  const { user, errorStatus } = useUserContext()

  return (
    <>
      <Header />
      {user ? <MainPage /> : <EmptyPage error={errorStatus} />}
    </>
  )
}
