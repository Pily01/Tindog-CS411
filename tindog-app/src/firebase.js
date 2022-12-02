// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDCLFqJw7lmJHdPpsgBlS5O4IonQH2I2GU",
    authDomain: "tinder-dog-febde.firebaseapp.com",
    projectId: "tinder-dog-febde",
    storageBucket: "tinder-dog-febde.appspot.com",
    messagingSenderId: "828144301123",
    appId: "1:828144301123:web:46db23e1c52349207990f6",
    measurementId: "G-VRZPSBXTEQ"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const database = getFirestore(app);

export default database