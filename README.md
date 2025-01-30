## Overview

In this project, I used Detox framework combined with TypeScript to automate testing of a mobile application on both Android and iOS platforms. I built the test framework structure and configuration from scratch, applying a functional approach to writing code. I introduced code quality tools such as Prettier, ESLint, and Husky and I set up Github workflows that run all implemented tests for every new pull request.

Detox is an open-source end-to-end (E2E) testing framework for React Native mobile applications. For more details, refer to the official [documentation](https://wix.github.io/Detox/). 

Test application used in this project originates from the **Pinnacle QA Academy** [repository](https://github.com/PinnacleQAAcademy/pqaa_detox) and was provided as part of their course on the Detox framework.

## Project setup

To successfully run this project on both platforms, a Mac machine is required, as Xcode is essential for running iOS tests. This guide is specifically designed for macOS users.

1.&nbsp; Install Homebrew
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

2.&nbsp; Install Node.js
```
brew install node@20
```

3.&nbsp; Install yarn
```
brew install yarn
```

4.&nbsp; Set up Android

To set up Android Environment, follow the guide available **[here](https://reactnative.dev/docs/next/set-up-your-environment?platform=android)**.

5.&nbsp; Set up iOS

To set up iOS Environment, follow the guide available **[here](https://reactnative.dev/docs/next/set-up-your-environment?platform=ios)**.

6.&nbsp; Install Ruby
```
brew install ruby@3.1
```

7.&nbsp; Install CocoaPods
```
sudo gem install cocoapods
```

8.&nbsp; Install applesimutils
```
brew tap wix/brew && brew install applesimutils
```  

9.&nbsp; Install Detox CLI
```
yarn global add detox-cli
```

10.&nbsp; Clone the repository
```
git clone https://github.com/jakubrylko/detox-typescript.git
```

11.&nbsp; Install dependencies
```
cd detox-typescript && yarn install
```

For troubleshooting, check the Detox Environment Setup guide available **[here](https://wix.github.io/Detox/docs/introduction/environment-setup)**.

## Executing tests

### Prerequisites

#### 1.&nbsp; Create emulator device  

To run **Android** tests, create **Pixel_XL_API_31** emulator instance, which is defined in the `.detoxrc.js` file and assigned to: `devices.emulator.device.avdName`. This emulator can be created manually through Android Studio or via the terminal using the following command:
```
avdmanager create avd -n Pixel_XL_API_31 -k "system-images;android-31;google_apis;x86_64" --device "pixel_xl"
```

While the emulator device can be changed to another, it is not recommended, as it hasn't been tested on different emulators. Some tests may fail due to viewport differences and/or compatibility issues.

#### 2.&nbsp; Create simulator device  

To run **iOS** tests, create an **iPhone 15** simulator instance with **iOS 17.5**, which is defined in the `.detoxrc.js` file and assigned to `devices.simulator.device.type`. It can be created manually through Xcode or via the terminal using the following command:
```
xcrun simctl create "iPhone 15" com.apple.CoreSimulator.SimDeviceType.iPhone-15 com.apple.CoreSimulator.SimRuntime.iOS-17-5
```

Simulator can be changed to another, however it is not recommended, as some tests may fail due to compatibility issues across different OS versions.

### Run tests

#### 1.&nbsp; Run device
```
emulator -avd Pixel_XL_API_31
```

```
xcrun simctl boot "iPhone 15"
```

#### 2.&nbsp; Start Metro bundler
```
yarn metro:start
```

#### 3.&nbsp; Run Detox build  

Detox has its own build commands to prepare the app for testing. It can be built in debug and release configurations. The **debug** configuration is recommended for local use, as it includes debugging capabilities. The **release** configuration is used in CI, as it is optimized for performance.
```
yarn detox:build:android:debug

yarn detox:build:android:release
```

Before building the iOS, make sure to install pods:
```
yarn pods

yarn detox:build:ios:debug

yarn detox:build:ios:release
```
---

In case of any issues with building the app, check the official [documentation](https://wix.github.io/Detox/docs/troubleshooting/building-the-app) or try using the provided cleanup scripts:
```
yarn clean:detox

yarn clean:android

yarn clean:pods

yarn clean:ios
```

#### 4.&nbsp; Run Detox tests  

To run entire test suite use:
```
yarn detox:test:android:debug

yarn detox:test:android:release
```

```
yarn detox:test:ios:debug

yarn detox:test:ios:release
```

To run single spec file add relative path:
``` 
yarn detox:test:android:debug e2e/tests/home.test.ts

yarn detox:test:android:release e2e/tests/home.test.ts
```

```
yarn detox:test:ios:debug e2e/tests/home.test.ts

yarn detox:test:ios:release e2e/tests/home.test.ts
```

For troubleshooting issues with running tests, refer to the official [documentation](https://wix.github.io/Detox/docs/troubleshooting/running-tests).

## Development tools

### Code quality

This project uses the following tools to ensure code quality: [Prettier](https://prettier.io/docs/en/), [ESLint](https://eslint.org/docs/latest/), [TypeScript](https://typescriptlang.org/docs/), and [Husky](https://typicode.github.io/husky/). Quality checks automatically run on each commit, ensuring that standards are met. However, they can also be run independently at any time using the following commands:

Prettier formatting:
```
yarn format
```
ESLint validation:
```
yarn lint
```
Type checks:
```
yarn type:check
```

### Debugging

To inspect Android components, I used [Appium Inspector](https://github.com/appium/appium-inspector?tab=readme-ov-file). For iOS components, Xcode and [React Native DevTools](https://reactnative.dev/docs/react-native-devtools). To debug network traffic - [Proxyman](https://proxyman.com/).

### Github workflows

In the project, GitHub workflows are configured to automatically run all tests on each new pull request, in parallel for iOS and Android. If any tests fail, artifacts such as logs and videos are generated and available for download. Additionally, tests can be run on demand at any time on any branch.
