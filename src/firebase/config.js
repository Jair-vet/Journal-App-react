// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuxqbct7q3TlZt_vRpk42KouZ7l2y667Y",
  authDomain: "journalapp-react-c3c8c.firebaseapp.com",
  projectId: "journalapp-react-c3c8c",
  storageBucket: "journalapp-react-c3c8c.appspot.com",
  messagingSenderId: "273786357514",
  appId: "1:273786357514:web:694dd15da41b30946a5cf3"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
// Configuracion de Autenticación
export const FirebaseAuth = getAuth( FirebaseApp );
// Configuración de la base de Datos
export const FirebaseDB = getFirestore( FirebaseApp )