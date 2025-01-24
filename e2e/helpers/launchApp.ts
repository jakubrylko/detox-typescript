export const launchApp = async ({
  newInstance = true,
  ...rest
}: {
  newInstance?: boolean
  [key: string]: unknown
} = {}) => {
  await device.launchApp({
    permissions: { notifications: 'YES' },
    newInstance,
    launchArgs: { ...rest }
  })
}

export const reloadApp = async () => await device.reloadReactNative()
