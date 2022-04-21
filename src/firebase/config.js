import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, initializeAuth } from "firebase/auth"
import { getReactNativePersistence } from "firebase/auth/react-native"
import config from "../../firebase.json"
import AsyncStorage from '@react-native-async-storage/async-storage';

let app;
let auth;

if (getApps().length < 1) {
  app = initializeApp(config)
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
  })
} else {
  app = getApp();
  auth = getAuth();
}

export { auth }