const initializeApp = require('firebase/app').initializeApp;
const getFirestore = require('firebase/firestore').getFirestore;

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "ellehacks-2023.firebaseapp.com",
  projectId: "ellehacks-2023",
  storageBucket: "ellehacks-2023.appspot.com",
  messagingSenderId: "254632115786",
  appId: "1:254632115786:web:41c791e319d2cd264cb0b3"
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

module.exports = db;
