import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, child, remove } from "firebase/database";
import { v4 as uuidv4 } from "uuid";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
};

const app = initializeApp(firebaseConfig);

// Get a reference to the database service
export const database = getDatabase(app);

export const writeItem = (item) => {
  const id = uuidv4();
  set(ref(database, "syntra/" + id), item);
};

export const updateItem = (id, item) => {
  set(ref(database, "syntra/" + id), item);
};

export const readItem = async (itemId) => {
  const dbRef = ref(database);
  const snapshot = await get(child(dbRef, `syntra/${itemId}`));
  if (snapshot.exists()) {
    return snapshot.val();
  }
};

export const removeItem = async (id) => {
  await remove(ref(database, "syntra/" + id));
};
