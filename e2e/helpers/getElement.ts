export const getById = (id: Matcher) => element(by.id(id))

export const getByLabel = (label: Matcher) => element(by.label(label))

export const getByText = (text: Matcher) => element(by.text(text))

export const getByType = (type: string) => element(by.type(type))
