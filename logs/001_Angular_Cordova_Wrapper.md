# Title: Angular Cordova Wrapper

## Description: Setting up cordova wrapper for angular app

## Links
- [Link](https://auth0.com/blog/converting-your-web-app-to-mobile/)
- [Android Studio](https://developer.android.com/studio)

## Aims
- Understand how to create a cordova wrapper for an existing angular app
- Understand pre-requisites for creating a cordova wrapper
- Create a universal script which can transform an angular project into a cordova app on Android

## Steps

### 1
run cordova-wrapper -n <APP-NAME> --clean

### 2
- Create the cordova app
  - `cordova create your-app-name com.example.myapp MyAppName`
- Enter app
  - `cd your-app-name`
- Add the platforms
  - `cordova platform add android`
- Change the name of the app
  - TODO: Requires python script that modifies config.xml
- Plugins you want to add
  - .
- Build the app
  - `ng build --configuration=production --extract-css=false    --prod --aot --base-href ./`
- Copy all from projet dist to cordova app www
  - `cp -r dist/<App>/* bsafe/www/`
- Enter src and modify `index.html`
  - `cd src && ` TODO: Requires python script that runs replace on `index.html`
    - `filedata.replace('</head>', '<script type="text/javascript" src="cordova.js"></script>\n</head>')`
- Build Cordova App (This builds a debug version, not a release version)
  - `cd ../<App> && cordova build`
- Move app to top dir
  - `cp /home/jcrymble/personal/projects/ynab-free/ynab-free-app/platforms/android/app/build/outputs/apk/debug/app-debug.apk apks/`
- Install app connected phone
  - `adb install -r app-debug.apk`

## Notes
- Name for the app is set in config.xml

- IT WORKS!
- Current Settings
  - export ANDROID_HOME=/opt/android/
  - export ANDROID_SDK_ROOT=/opt/android-sdk/
  - sudo /opt/android-sdk/tools/bin/sdkmanager "build-tools;28.0.3" "platforms;android-28"
  - /opt/android-sdk/tools/bin/sdkmanager "platform-tools"
- Also Maybe
  - chmod 777 $ANDROID_HOME -R
  - yay -S android-studio
  - cordova requirements helps see some problem
  - Changed target in tsconfig.json to es5

- Create script for this called cordova-wrapper
  - Can be found in `personal/projects/`
  - Run from folder above angular project
- Additional features
  - Make more robust with try catches and the like
  - Ensure in angular project before continuing
  - Also think of folder structure for new projects
  - Add alias to .bashrc to call cordova-wrapper from any angular project
  - Update usage
