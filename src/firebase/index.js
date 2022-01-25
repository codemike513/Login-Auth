import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAIA5HrQH9cDsmPDyzxSo2yDSyCNRlPyyo",
  authDomain: "login-auth-b8f30.firebaseapp.com",
  projectId: "login-auth-b8f30",
  storageBucket: "login-auth-b8f30.appspot.com",
  messagingSenderId: "689093246003",
  appId: "1:689093246003:web:1bc67ff5f70a847941b746",
  measurementId: "G-D5VZSM0V2K",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
