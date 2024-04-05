export type EmptyContentType = 'initial' | '404' | 'defaultError' | 'repository'

export type ContentTypeMapper = Record<
  EmptyContentType,
  {
    title: string
    icon: JSX.Element
  }
>
