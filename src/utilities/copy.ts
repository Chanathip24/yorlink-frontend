import copy from 'copy-to-clipboard'

export const copyTextToClipboard = (text: string) => {
  return copy(text)
}
