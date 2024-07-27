// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC08TMIKm1jFF0PZHt-VuiSKCrRMIC7YO8",
  authDomain: "react-js-na.firebaseapp.com",
  projectId: "react-js-na",
  storageBucket: "react-js-na.appspot.com",
  messagingSenderId: "261844665919",
  appId: "1:261844665919:web:c81ae184e591b8b5209a8a",
  measurementId: "G-2BP6JCK23V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


// productos.forEach((prod) => {
//   addDoc(collection(db, "productos"), prod)
//     .then((data) =>
//       console.log(`El producto ${data.id} se subió correctamente`)
//     )
//     .catch((error) => console.log(error));
// }); 