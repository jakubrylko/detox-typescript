export const typeAndSubmit = async (
  element: Detox.NativeElement,
  text: string
) => {
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
