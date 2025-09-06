// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  projectId: "evidecia-flow",
  appId: "1:503101257886:web:48aecb025284cba63da38f",
  storageBucket: "evidecia-flow.firebasestorage.app",
  apiKey: "AIzaSyBDV-xh3CXz7Q0Zm69j2SVBcjLmuW-HS7k",
  authDomain: "evidecia-flow.firebaseapp.com",
  messagingSenderId: "503101257886",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { app, auth };
