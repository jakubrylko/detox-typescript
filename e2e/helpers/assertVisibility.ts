import { getAttribute, waitUntilNotVisible, waitUntilVisible } from '.'

export const shouldBeVisible = async (target: DetoxTarget) => {
  if (Array.isArray(target)) {
    for await (const element of target) {
      await waitUntilVisible(element)
    }
  } else {
    await waitUntilVisible(target)
  }
}

export const shouldNotBeVisible = async (target: DetoxTarget) => {
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
