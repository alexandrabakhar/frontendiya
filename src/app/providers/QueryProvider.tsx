import {
  MutationCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { FC, PropsWithChildren, useState } from 'react'
import { useUserContext } from '@/entities/user'

export const QueryProvider: FC<PropsWithChildren> = ({ children }) => {
  const { onError } = useUserContext()
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
        mutationCache: new MutationCache({
          onError: (error, _variables, _context, mutation) => {
            if (mutation.options.onError) {
              return
            }
            onError(error.message)
          },
        }),
      }),
  )
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
