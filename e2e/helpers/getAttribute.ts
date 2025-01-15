export const getAttribute = async (
  selector: Detox.IndexableNativeElement,
  attribute: keyof Detox.ElementAttributes,
  { index = 0 } = {}
) => {
  const attributes = await selector.atIndex(index).getAttributes()

  if (!('elements' in attributes)) {
    return attributes[attribute]
  } else if (index !== undefined) {
    return attributes.elements[index][attribute]
  } else {
    console.log('Multiple elements returned!')
  }
}

export const getLabel = async (
  selector: Detox.IndexableNativeElement,
  { index = 0 } = {}
) => {
  const attributes = await selector.getAttributes()

  if ('elements' in attributes) {
    return attributes.elements[index].label || ''
  } else {
    return attributes.label || ''
  }
}

export const getText = async (
  selector: Detox.IndexableNativeElement,
  { index = 0 } = {}
) => {
  const attributes = await selector.getAttributes()

  if ('elements' in attributes) {
    return attributes.elements[index].text || ''
  } else {
    return attributes.text || ''
  }
}

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
