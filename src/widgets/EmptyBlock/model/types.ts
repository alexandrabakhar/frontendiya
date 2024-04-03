export type ContentType = 'initial' | 'user' | 'repository'

export type ContentTypeMapper = Record<
  ContentType,
  {
    title: string
    icon: JSX.Element
  }
>
