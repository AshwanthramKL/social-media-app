import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqaWBlu6GJ-zUv575pgVQiQ_OsfHOVU8U",
  authDomain: "social-media-react-91b94.firebaseapp.com",
  projectId: "social-media-react-91b94",
  storageBucket: "social-media-react-91b94.appspot.com",
  messagingSenderId: "114069791318",
  appId: "1:114069791318:web:e8daf960ade1c9e59b51f7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);
