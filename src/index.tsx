import { NativeModules, Platform } from 'react-native';
import crashlytics from '@react-native-firebase/crashlytics';

const LINKING_ERROR =
  `The package 'react-native-analyticsample' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

// @ts-expect-error
const isTurboModuleEnabled = global.__turboModuleProxy != null;

const AnalyticsampleModule = isTurboModuleEnabled
  ? require('./NativeAnalyticsample').default
  : NativeModules.Analyticsample;

const Analyticsample = AnalyticsampleModule
  ? AnalyticsampleModule
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function multiply(a: number, b: number): Promise<number> {
  return Analyticsample.multiply(a, b);
}

export function add(a: number, b: number): number {
  return a + b;
}

export function initializeLibrary() {
  crashlytics().log('From library');
  crashlytics().crash();
  console.log('Library initialized with Firebase.');
}
