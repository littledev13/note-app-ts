import { initializeApp } from "firebase/app";
import {
  child,
  getDatabase,
  onValue,
  ref,
  get,
  set,
  push,
} from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const app = initializeApp({
  apiKey: "AIzaSyBsnec9z-Um-c46NqemxNA2Dag7aaKpoiU",
  authDomain: "notes-app-584c6.firebaseapp.com",
  databaseURL:
    "https://notes-app-584c6-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "notes-app-584c6",
  storageBucket: "notes-app-584c6.appspot.com",
  messagingSenderId: "48626393648",
  appId: "1:48626393648:web:754e470d1a47e1662183f5",
  measurementId: "G-MNGCE69TSL",
});

const database = getDatabase();

async function readData(e: string) {
  try {
    const dbRef = ref(getDatabase());
    const snapshot = await get(child(dbRef, e));
    if (snapshot.exists()) {
      const data = snapshot.val();
      return data;
    } else {
      console.log("No data available");
      return null;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

function writeData(title: string, note: string) {
  set(push(ref(database, "notes/")), {
    title,
    note,
  });
}
async function listenNotes() {
  const starCountRef = ref(getDatabase(), "/");
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    return data;
  });
}
export { database, listenNotes, writeData, readData };
