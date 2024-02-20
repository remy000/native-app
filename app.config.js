export default{
  expo: {
    name: "nativeApp",
    slug: "nativeApp",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    plugins: [
      " @react-native-google-signin/google-signin"
    ],
    assetBundlePatterns: [
      "**/*"
    ],
    ios: {
      supportsTablet: true,
      bundleIdentifier:"com.nativeApp.firebase",
      googleServicesFile:process.env.GOOGLE_SERVICE_INFOPLIST
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff"
      },
      "package": "com.nativeaApp.firebase",
      googleServicesFile:process.env.GOOGLE_SERVICE_JSON
    },
    web: {
      "favicon": "./assets/favicon.png"
    },
    plugins: [
      "expo-router"
    ],
    extra: {
      router: {
      origin: false
      },
      eas: {
        projectId: "cb8b4ae9-cea6-43a1-a536-acf7541b46fa"
      }
    }
  }
}
