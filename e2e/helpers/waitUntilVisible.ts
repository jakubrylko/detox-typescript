import { expect } from 'detox'

export const waitUntilVisible = async (
  element: Detox.NativeElement,
  { visibility = 75, timeout = 3000 }: DetoxWaitOptions = {}
) => {
  await waitFor(element).toBeVisible(visibility).withTimeout(timeout)
  await expect(element).toBeVisible(visibility)
}

export const waitUntilNotVisible = async (
  element: Detox.NativeElement,
  { visibility = 75, timeout = 3000 }: DetoxWaitOptions = {}
) => {
  await waitFor(element).not.toBeVisible(visibility).withTimeout(timeout)
  await expect(element).not.toBeVisible(visibility)
}
