import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey:REACT.APP.apiKey,
  authDomain:REACT.APP.authDomain,
  projectId:REACT.APP.projectId,
  storageBucket:REACT.APP.storageBucket,
  messagingSenderId:REACT.APP.messagingSenderId,
  appId:REACT.APP.appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app)
export default app ;