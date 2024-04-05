import { FC, PropsWithChildren } from 'react'

type Props = {
  providers: FC<PropsWithChildren>[]
} & PropsWithChildren

const ComposerFragment: FC<PropsWithChildren> = ({ children }) => (
  <>{children}</>
)
const providerReducer =
  (
    ParentProvider: FC<PropsWithChildren>,
    ChildProvider: FC<PropsWithChildren>,
  ) =>
  ({ children }: PropsWithChildren) => {
    return (
      <ParentProvider>
        <ChildProvider>{children}</ChildProvider>
      </ParentProvider>
    )
  }
export const ProviderComposer: FC<Props> = ({ children, providers }) => {
  const ComposedProviders = providers.reduce(providerReducer, ComposerFragment)
  return <ComposedProviders>{children}</ComposedProviders>
}
