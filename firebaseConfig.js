
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDgY5CAsInjCWyoNOPISLBAZJsIOYezm10",
  authDomain: "todotrack-159c0.firebaseapp.com",
  projectId: "todotrack-159c0",
  storageBucket: "todotrack-159c0.appspot.com",
  messagingSenderId: "38996457913",
  appId: "1:38996457913:web:c5ca7c1a5dfc965d449e68"
};


const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)     
});

export const db=getFirestore(app);

export default app;