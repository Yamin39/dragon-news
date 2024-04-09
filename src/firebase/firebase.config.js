// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0wGIxl6zPmnQJ6iTJELxmdAxDyAK6jps",
  authDomain: "dragon-news-dd0b5.firebaseapp.com",
  projectId: "dragon-news-dd0b5",
  storageBucket: "dragon-news-dd0b5.appspot.com",
  messagingSenderId: "562650184666",
  appId: "1:562650184666:web:bf9365e1be0d3047839ee3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
