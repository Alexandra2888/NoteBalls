// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAjDeWvDwgOlsD3-0VMLXTTVsEsjSnipwo",
    authDomain: "noteballs-f5a4d.firebaseapp.com",
    projectId: "noteballs-f5a4d",
    storageBucket: "noteballs-f5a4d.appspot.com",
    messagingSenderId: "104857893690",
    appId: "1:104857893690:web:aab10cd84222c686572e03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {
    db,
    auth
}
