React Native workshop for Ohana JS.
==================

This readme will walk you through creating an app with a map. Note that this assumes iOS since that's all that's available at the time of this writing.

Getting Started:
----------------------

Requirements: XCode and Homebrew

Install dependencies:
* `brew install node`
* `brew install --HEAD watchman` (docs say you might encounter a bug if you do not install this).
* `npm -g install react-native-cli` (do NOT install react-native directly).

Create project:
* `react-native init AppWithAMap`
* `cd AppWithAMap`
* `open AppWithAMap.xcodeproj` (opens the app in XCode)
* Push the run button. While developing, make sure to keep the terminal window and XCode running at all times. You may want to minimize XCode as we will not be using it for this workshop.
* Make some changes to `index.ios.js`, then hit CMD+R in the simulator to see it update (might have to hit it twice the first time).
* Use the shortcut on the startup screen to bring up the debug menu. You may want to enable both LiveReload and Chrome Debugging (I had some difficulty with Chrome debugging).
