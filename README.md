# react-native Kite Zerodha mockup

## What is this repo or project?

I started this project out as to learn and experiment with react-native. I have taken an app called kite and tried to rework the UI and slowly some of the features into it. 

### v0.1

[![Demo](https://i.imgur.com/8yx4Uat.gif)]

## How does it work?
It can be cloned, and after installing all dependencies it can be installed onto your phone or virtual device. This is not tested in all phones. 
    
### Getting Started
Make sure environment is already setup

```
//clone repo
git clone <repo>
// remove node_modules
rm -rf mode_modules
// reinstall dependencies
npm install
// install on android
react-native run-android
// Refreshing on android
adb shell input text "RR
```

## Who will use this repo or project?
As of now, its just a simple project I am working on.
Anyone can use this as a template they are working on and modify it.

## What is the goal of this project?
I have been thinking of making this into some nice opensource project for screening stocks. This will however take time and I do not know the financial implications of that, It would be awesome if it works out.

## Authors
** Albert Sebastian **

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


## LOGS

### Update 20th May:
Login Details have been added
Working on logged state checker 
and a logout option
So far I would say 30 hours has been spent on building this. (Disclaimer, I am new to react and android as well)

### Update 19th May:
Integrated PIN page.
made changes to Routing
Started from Login -> Pin -> __DrawNav

### Update log 18th May:

I have been able to fix most of the issues in navigation. Quite surprised why I didnt get this in the first place.
The code can be cloned and as long as dependancies are taken care of, you can run the demo app.

Next to DO:
Detailing on the drawer menu
Move bottom tab to top (or get rid of it)

### Update log 18th May:

I had made a big blunder on the react-navigation modules. It was the wrong version on the package.json and I also had a double installed with npm and yarn. 

I have made a change now and its working now. 
I have been able to make a cleaner code right now,
seperating the files.

### INTRO

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