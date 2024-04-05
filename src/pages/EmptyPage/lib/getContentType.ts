export const getContentType = (error?: Nullable<string>) => {
  if (error === '404') {
    return error
  }

  if (!error) {
    return 'initial'
  }

  return 'defaultError'
}
