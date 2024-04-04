export type EmptyContentType = 'initial' | 'user' | 'repository'

export type ContentTypeMapper = Record<
  EmptyContentType,
  {
    title: string
    icon: JSX.Element
  }
>
