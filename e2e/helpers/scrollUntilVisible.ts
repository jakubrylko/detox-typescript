export const scrollUntilVisible = async (
  element: Detox.NativeElement,
  scroll: Detox.NativeMatcher,
  {
    visibility = 75,
    pixels = 200,
    direction = 'down',
    startPositionX = 0.5,
    startPositionY = 0.8
  }: DetoxScrollOptions = {}
) => {
  await waitFor(element)
    .toBeVisible(visibility)
    .whileElement(scroll)
    .scroll(pixels, direction, startPositionX, startPositionY)
}
