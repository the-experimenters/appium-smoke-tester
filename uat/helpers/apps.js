/*jslint node: true */

'use strict';

if (process.env.DEV) {
  exports.iosWebviewApp = "sample-code/apps/ios/sim/WebViewApp.app";
  exports.iosPrivate1 = "sample-code/apps/ios/sim/BeanThere.app";
  exports.iosPrivate1Device = "sample-code/apps/ios/device/Private1.app";
  exports.androidPrivate1 = "sample-code/apps/android/BeanThere-debug.apk";
} else {
  exports.iosWebviewApp = "http://appium.github.io/appium/assets/WebViewApp7.1.app.zip";
  exports.androidApiDemos = "http://appium.github.io/appium/assets/ApiDemos-debug.apk";
  exports.selendroidTestApp = "http://appium.github.io/appium/assets/selendroid-test-app-0.10.0.apk";
}