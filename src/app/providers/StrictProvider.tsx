import { FC, PropsWithChildren, StrictMode } from 'react'

export const StrictProvider: FC<PropsWithChildren> = ({ children }) => {
  return <StrictMode>{children}</StrictMode>
}
