export const replaceAndSubmit = async (
  element: Detox.NativeElement,
  text: string
) => {
  await element.replaceText(text)
  await element.tapReturnKey()
}
