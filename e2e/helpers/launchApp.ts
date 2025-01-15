import { device } from 'detox'

export const launchApp = async ({ ...rest }: Record<string, unknown> = {}) => {
  await device.launchApp({
    permissions: { notifications: 'YES' },
    newInstance: true,
    launchArgs: { ...rest }
  })
}

export const reloadApp = async () => await device.reloadReactNative()
