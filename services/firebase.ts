import { initializeFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';
import { getAuth } from 'firebase/auth';

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
let app;

if (firebase.apps.length === 0) {
    app = initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}
const auth = getAuth(app);
const db = initializeFirestore(app, { experimentalForceLongPolling: true });

export { auth, db };
