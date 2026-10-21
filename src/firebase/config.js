import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {

    apiKey: "AIzaSyALsKEg6hMwRwh2eNm0YyFamU4g5fB2heg",
  authDomain: "ecommerce-c17bf.firebaseapp.com",
  projectId: "ecommerce-c17bf",
  storageBucket: "ecommerce-c17bf.firebasestorage.app",
  messagingSenderId: "841951314749",
  appId: "1:841951314749:web:69f247236a302721d0fb54"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth};