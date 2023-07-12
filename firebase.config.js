import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyALh7wKX0H1GQBkkg7ZJT5uf2oLV5ou9lY",
  authDomain: "pubg-gamingproduction.firebaseapp.com",
  projectId: "pubg-gamingproduction",
  storageBucket: "pubg-gamingproduction.appspot.com",
  messagingSenderId: "713506897247",
  appId: "1:713506897247:web:f81671fb041ddb6297caea"
};

const app = initializeApp(firebaseConfig);
export default app ;