import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCXZ0717j7FkVOMnNVXqPcdhPC6jiSSmy0",
    authDomain: "employeemanage-b330e.firebaseapp.com",
    projectId: "employeemanage-b330e",
    storageBucket: "employeemanage-b330e.appspot.com",
    messagingSenderId: "988427647235",
    appId: "1:988427647235:web:7d3c8931fd4c2c97629136"
  };

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)