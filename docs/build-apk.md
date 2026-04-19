# Сборка APK

## Подготовка

```bash
ionic build --prod
npx cap sync android
```

## Через Android Studio

```bash
npx cap open android
```

Build → Build Bundle(s) / APK(s) → Build APK(s)

## Через CLI (без Android Studio)

### Debug

```bash
cd android
./gradlew assembleDebug
```

APK: `android/app/build/outputs/apk/debug/`

### Release

```bash
cd android
./gradlew assembleRelease
```

Для release-сборки необходимо настроить подпись (keystore) в `android/app/build.gradle`.
