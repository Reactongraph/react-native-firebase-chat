# react-native-firebase-chat
This repository contains the source code for a simple chat application built with React Native (frontend) and Firebase (backend).

## Preview
![chat](https://user-images.githubusercontent.com/37612566/58700313-4c14cd00-83bd-11e9-8908-9dceace8319a.png)
![copy message](https://user-images.githubusercontent.com/37612566/58700310-4b7c3680-83bd-11e9-86ee-464044012e38.png)
![join group](https://user-images.githubusercontent.com/37612566/58700312-4b7c3680-83bd-11e9-952d-e6b72351174e.png)![firebase-chat-database](https://user-images.githubusercontent.com/37612566/58699010-18847380-83ba-11e9-87dc-0c071761a8ec.png)


## Main technologies used

- [React Native](https://github.com/facebook/react-native)
- [Firebase](https://console.firebase.google.com/u/0/)

## Running the project

- Clone this project
```
git clone < project-url.git >
```

- [Install NodeJS](https://nodejs.org/en/) on your computer.

- [Install yarn](https://yarnpkg.com/en/docs/install) on your computer
> Yarn is a dependency manager built by facebook and google. It is a more efficient and reliable (thanks to yarn.lock) alternative of npm.

- Launch ``` yarn ``` command in a terminal opened in the project folder.
> This command will look into the *package.json* file and install all the dependencies listed here.

- Install [react-native-cli](https://facebook.github.io/react-native/docs/getting-started.html) globally on your computer
```
yarn global add react-native-cli
```

### Android steps

- Launch a virtual android device [(through *Android Studio* for instance)](https://developer.android.com/studio/run/managing-avds.html#viewing)

> If you have never installed any android virtual device, [follow those instructions](https://developer.android.com/studio/run/managing-avds.html#createavd)

- Then, run the project in executing on your project folder:
```
react-native run-android
```

 ### IOS steps
- [Download Xcode](https://developer.apple.com/xcode/) on your Mac.

- Open Project on Mac by double click on <yourproject/ios/.xcodeproj> file
-Project can directly run from xCode or run following command.

- Run project on ios
`react-native run-ios`

### Start react native packager
`yarn start`

### Change firebase config
Copy the config from your Firebase account and paste it to ./src/config/frirebaseSDK

```firebase.initializeApp({
    apiKey: “<API_KEY>“,
    authDomain: “<PROJECT_ID>.firebaseapp.com”,
    databaseURL: “https://<DATABASE_NAME>.firebaseio.com”,
    projectId: “<PROJECT_ID>“,
    storageBucket: “<BUCKET>.appspot.com”,
    messagingSenderId: “<SENDER_ID>“,
 });```

