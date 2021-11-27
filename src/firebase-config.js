const firebaseConfig = {
  apiKey: "AIzaSyBhnGdN-nfbf0AyplaJtAuqHzKYK6cOtYc",
  authDomain: "where-s-waldo-823a9.firebaseapp.com",
  projectId: "where-s-waldo-823a9",
  storageBucket: "where-s-waldo-823a9.appspot.com",
  messagingSenderId: "603986132702",
  appId: "1:603986132702:web:37592131127dcffae90c4f",
};

export const getFirebaseConfig = () => {
  if (!firebaseConfig || !firebaseConfig.apiKey) {
    throw new Error(
      "No Firebase configuration object provided." +
        "\n" +
        "Add your web app's configuration object to firebase-config.js"
    );
  } else {
    return firebaseConfig;
  }
};
