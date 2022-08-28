
import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDgilp1Blj5n81KLJHVvEdehh2zXSK5-yE",
    authDomain: "dcam-sales-inventory.firebaseapp.com",
    projectId: "dcam-sales-inventory",
    storageBucket: "dcam-sales-inventory.appspot.com",
    messagingSenderId: "295192401702",
    appId: "1:295192401702:web:861b5c4641dbb7e70713e7"
  };

// init firebase
initializeApp(firebaseConfig)

// init firestore
const db = getFirestore()

export {db}