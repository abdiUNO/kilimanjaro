// Import the functions you need from the SDKs you need
import { initializeFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyDXImFi-f2-qbh0Z_njoTNg3AQrMSBmLoY',
    authDomain: 'kilimanjaro-d85ca.firebaseapp.com',
    projectId: 'kilimanjaro-d85ca',
    storageBucket: 'kilimanjaro-d85ca.appspot.com',
    messagingSenderId: '801516503973',
    appId: '1:801516503973:web:aef169285a68b8b3f01e4c',
    measurementId: 'G-FPHNTHV0D7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = initializeFirestore(app, { experimentalForceLongPolling: true });

export { db, auth };
