import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
};
console.log(firebaseConfig);

const app = initializeApp(firebaseConfig);

// Get a reference to the database service
export const database = getDatabase(app);
