import Firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyDy0mPJ7kIJ1sESXM4B3wO87r28aRScfEI",
  authDomain: "netflix-clone-562eb.firebaseapp.com",
  databaseURL: "https://netflix-clone-562eb.firebaseio.com",
  projectId: "netflix-clone-562eb",
  storageBucket: "netflix-clone-562eb.appspot.com",
  messagingSenderId: "1022469298523",
  appId: "1:1022469298523:web:d13c38cf1ae467dcf4227e",
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
