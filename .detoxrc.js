module.exports = {
  testRunner: {
    args: {
      $0: 'jest',
      config: 'jest.config.js'
    },
    jest: {
      setupTimeout: 200000
    }
  },

  apps: {
    'android.debug': {
      type: 'android.apk',
      binaryPath: 'android/app/build/outputs/apk/debug/app-debug.apk',
      build:
        'cd android && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug'
    },
    'android.release': {
      type: 'android.apk',
      binaryPath: 'android/app/build/outputs/apk/release/app-release.apk',
      build:
        'cd android && ./gradlew assembleRelease assembleAndroidTest -DtestBuildType=release'
    },
    'ios.debug': {
      type: 'ios.app',
      binaryPath:
        'ios/build/Build/Products/Debug-iphonesimulator/pqaa_detox.app',
      build:
        'xcodebuild -workspace ios/pqaa_detox.xcworkspace -scheme pqaa_detox -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build'
    },
    'ios.release': {
      type: 'ios.app',
      binaryPath:
        'ios/build/Build/Products/Release-iphonesimulator/pqaa_detox.app',
      build:
        'xcodebuild -workspace ios/pqaa_detox.xcworkspace -scheme pqaa_detox -configuration Release -sdk iphonesimulator -derivedDataPath ios/build'
    }
  },

  devices: {
    emulator: {
      type: 'android.emulator',
      device: {
        avdName: 'Pixel_XL_API_31'
      }
    },
    simulator: {
      type: 'ios.simulator',
      device: {
        type: 'iPhone 15'
      }
    }
  },

  configurations: {
    'android.debug': {
      device: 'emulator',
      app: 'android.debug'
    },
    'android.release': {
      device: 'emulator',
      app: 'android.release'
    },
    'ios.debug': {
      device: 'simulator',
      app: 'ios.debug'
    },
    'ios.release': {
      device: 'simulator',
      app: 'ios.release'
    }
  }
}
