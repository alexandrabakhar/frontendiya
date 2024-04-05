import { QueryProvider } from './QueryProvider'
import { StrictProvider } from './StrictProvider'
import { UserContextProvider } from './UserContextProvider'

export const PROVIDERS = [UserContextProvider, QueryProvider, StrictProvider]

export { ProviderComposer } from './ProviderComposer'
