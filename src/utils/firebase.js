import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhnGdN-nfbf0AyplaJtAuqHzKYK6cOtYc",
  authDomain: "where-s-waldo-823a9.firebaseapp.com",
  projectId: "where-s-waldo-823a9",
  storageBucket: "where-s-waldo-823a9.appspot.com",
  messagingSenderId: "603986132702",
  appId: "1:603986132702:web:37592131127dcffae90c4f",
};

// initialize firebase
initializeApp(firebaseConfig);

// initialize services
const database = getFirestore();

// collection references
// const imgRef = collection(database, "images");
