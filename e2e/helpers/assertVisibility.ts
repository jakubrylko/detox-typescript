import { expect } from 'detox'
import { getAttribute } from './getAttribute'
import { waitUntilNotVisible, waitUntilVisible } from './waitUntilVisible'

export const shouldBeVisible = async (target: Target) => {
  if (Array.isArray(target)) {
    for await (const element of target) {
      await waitUntilVisible(element)
    }
  } else {
    await waitUntilVisible(target)
  }
}

export const shouldNotBeVisible = async (target: Target) => {
  if (Array.isArray(target)) {
    for await (const element of target) {
      await waitUntilNotVisible(element)
    }
  } else {
    await waitUntilNotVisible(target)
  }
}

export const isElementVisible = async (
  element: Detox.IndexableNativeElement,
  { index = 0 } = {}
) => {
  try {
    return Boolean(await getAttribute(element, 'visible', { index }))
  } catch {
    return false
  }
}

export const doesElementExists = async (
  element: Detox.IndexableNativeElement
) => {
  try {
    return Boolean(await expect(element).toExist())
  } catch {
    return false
  }
}
