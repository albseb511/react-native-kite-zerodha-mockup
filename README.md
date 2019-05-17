# react-native-kite-zerodha-mockup
A mockup of the app Kite from Zerodha made with react native. Its a work in progress

This is my first android app, and first time working on react-native.I thought its best to break down an existing app and rebuild it.
This has taken 10-14 hours of learning and coding for someone to understand time.

I have tested this on Android

To begin, clone the repo.

install all dependencies

react-native start

(Connect phone via debugging and setup environment, or setup Virtual device)

react-native run-android (to install app)

adb shell input text "RR" or open the app and refresh (via shake)

Presently its a WIP so I have been making seperate screens first
So if you goto ./app/screens, you will find that there are 
files like login.js, pin.js, market.js etc.
Presently just copy paste the code from each of the js file to App.js and refresh to see the screens. 

I am working on the react-navigation presently, so you will find a more cleaner version soon.

PS: I have used yarn, npm has been creating some issues for me.

If you are facing any issues, try clearing cache, watchman etc. and even remove node_modules and install npm again, and also link with react-native link