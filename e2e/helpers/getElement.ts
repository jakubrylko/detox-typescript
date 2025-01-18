export const getById = (id: DetoxMatcher) => element(by.id(id))

export const getByLabel = (label: DetoxMatcher) => element(by.label(label))

export const getByText = (text: DetoxMatcher) => element(by.text(text))

export const getByTraits = (traits: string[]) => element(by.traits(traits))

export const getByType = (type: string) => element(by.type(type))

export const getByDoubleMatcher = (
  first: Detox.NativeMatcher,
  second: Detox.NativeMatcher
) => element(first.and(second))

export const getWithAncestor = (
  child: Detox.NativeMatcher,
  parent: Detox.NativeMatcher
) => element(child.withAncestor(parent))

export const getWithDescendant = (
  parent: Detox.NativeMatcher,
  child: Detox.NativeMatcher
) => element(parent.withDescendant(child))
