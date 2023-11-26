// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  //   apiKey: "AIzaSyA4d9h7HRTzPdqRazoYG7IpZfjdr9KyXdc",
  //   authDomain: "hostel-management-79aab.firebaseapp.com",
  //   projectId: "hostel-management-79aab",
  //   storageBucket: "hostel-management-79aab.appspot.com",
  //   messagingSenderId: "358681128343",
  //   appId: "1:358681128343:web:07272c6c83cb6a72cc28d2",
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
