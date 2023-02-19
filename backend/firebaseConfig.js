const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');
const { getStorage } = require('firebase/storage');

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "ellehacks-2023.firebaseapp.com",
  projectId: "ellehacks-2023",
  storageBucket: "ellehacks-2023.appspot.com",
  messagingSenderId: "254632115786",
  appId: "1:254632115786:web:41c791e319d2cd264cb0b3",
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

module.exports = { db, storage };
