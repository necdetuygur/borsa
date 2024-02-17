
## gh-pages
```
git checkout -b gh-pages
ng add angular-cli-ghpages
ng deploy --base-href=https://necdetuygur.github.io/borsa/
git stash
git checkout master
git branch -D gh-pages
```


## mobile
```
npm install @capacitor/core
npm install @capacitor/cli
npx cap init
npm install @capacitor/android
npx cap add android
ng build
npx cap sync
npx cap open android
```

## autobuild
```

vup
vup
git push

nb
cd android

chmod -R 777 ./gradlew
./gradlew bundle

jarsigner -verbose -sigalg SHA256withRSA -digestalg SHA-256 -keystore ../../android-key/k1.jks -storepass "123456" -keypass "123456" ./app/build/outputs/bundle/release/app-release.aab key0

open app/build/outputs/bundle/release
explorer app/build/outputs/bundle/release

cd ..

```
