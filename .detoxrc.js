module.exports = {
  testRunner: {
    args: {
      $0: 'jest',
      config: 'jest.config.js'
    },
    jest: {
      setupTimeout: 120000
    }
  },

  apps: {
    ios: {
      type: 'ios.app',
      binaryPath:
        'ios/build/Build/Products/Debug-iphonesimulator/pqaa_detox.app',
      build:
        'xcodebuild -workspace ios/pqaa_detox.xcworkspace -scheme pqaa_detox -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build'
    },
    android: {
      type: 'android.apk',
      binaryPath: 'android/app/build/outputs/apk/debug/app-debug.apk',
      build:
        'cd android && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug'
    }
  },

  devices: {
    simulator: {
      type: 'ios.simulator',
      device: {
        type: 'iPhone 15'
      }
    },
    emulator: {
      type: 'android.emulator',
      device: {
        avdName: 'Pixel_XL_API_31'
      }
    }
  },

  configurations: {
    ios: {
      device: 'simulator',
      app: 'ios'
    },
    android: {
      device: 'emulator',
      app: 'android'
    }
  }
}
