import { waitUntilVisible } from './waitUntilVisible'

export const typeAndSubmit = async (
  element: Detox.NativeElement,
  text: string
) => {
  await waitUntilVisible(element)
  console.log(element)
  await element.typeText(text)
  await element.tapReturnKey()
}

export const replaceAndSubmit = async (
  element: Detox.NativeElement,
  text: string
) => {
  await element.replaceText(text)
  await element.tapReturnKey()
}

export const editAndSubmit = async (
  element: Detox.NativeElement,
  text: string
) => {
  await element.clearText()
  await element.typeText(text)
  await element.tapReturnKey()
}
