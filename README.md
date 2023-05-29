# GeoView

GeoViewアプリはAndroid、iOSデバイスで起動するアプリである。GPSから現在地の緯度・経度を取得し、目的地までの距離を表示する。

## インストール方法

コマンドプロンプト（Windows）あるいはターミナル（Mac）で次のコマンドを起動し、依存するパッケージをインストールする。

```bash
npm install
```

## NPMスクリプト

* 🔥 `start` - run development server
* 🔧 `dev` - run development server
* 🔧 `build` - build web app for production
* 📱 `build-cordova` - build cordova app
* 📱 `build-cordova-ios` - build cordova iOS app
* 📱 `cordova-ios` - run dev build cordova iOS app
* 📱 `build-cordova-android` - build cordova Android app
* 📱 `cordova-android` - run dev build cordova Android app

[実行例] 開発向けサーバーを起動する
[接続先](http://localhost:5173/)

```bash
npm start
```

[実行例] Androidアプリ（デバッグ版）をWindows PC上でビルドする
[出力先] cordova\platforms\android\app\build\outputs\apk\debug\app-debug.apk

```bash
npm run build-cordova-android
```

## Vite

There is a [Vite](https://vitejs.dev) bundler setup. It compiles and bundles all "front-end" resources. You should work only with files located in `/src` folder. Vite config located in `vite.config.js`.

## Cordova

Cordova project located in `cordova` folder. You shouldn't modify content of `cordova/www` folder. Its content will be correctly generated when you call `npm run cordova-build-prod`.

## Assets

Assets (icons, splash screens) source images located in `assets-src` folder. To generate your own icons and splash screen images, you will need to replace all assets in this directory with your own images (pay attention to image size and format), and run the following command in the project directory:

```bash
framework7 assets
```

Or launch UI where you will be able to change icons and splash screens:

```bash
framework7 assets --ui
```

## Documentation & Resources

* [Framework7 Core Documentation](https://framework7.io/docs/)

* [Framework7 Icons Reference](https://framework7.io/icons/)
* [Community Forum](https://forum.framework7.io)
