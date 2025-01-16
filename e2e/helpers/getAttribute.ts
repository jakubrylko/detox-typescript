export const getAttribute = async (
  selector: Detox.IndexableNativeElement,
  attribute: keyof Detox.ElementAttributes,
  { index = 0 } = {}
) => {
  const attributes = await selector.atIndex(index).getAttributes()

  if ('elements' in attributes) {
    return attributes.elements[index][attribute]
  } else {
    return attributes[attribute]
  }
}

export const getText = async (
  selector: Detox.IndexableNativeElement,
  { index = 0 } = {}
) => {
  const attributes = await selector.atIndex(index).getAttributes()

  if ('elements' in attributes) {
    return attributes.elements[index].text
  } else {
    return attributes.text
  }
}

// Works only on iOS
export const getNumOfElements = async (
  selector: Detox.IndexableNativeElement
) => {
  try {
    const attributes = await selector.getAttributes()
    return 'elements' in attributes ? attributes.elements.length : 1
  } catch {
    return 0
  }
}
