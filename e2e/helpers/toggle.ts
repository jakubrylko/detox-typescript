import { expect } from 'detox'

export const toggleShouldBeOn = async (element: Detox.NativeElement) =>
  await expect(element).toHaveToggleValue(true)

export const toggleShouldBeOff = async (element: Detox.NativeElement) =>
  await expect(element).toHaveToggleValue(false)
