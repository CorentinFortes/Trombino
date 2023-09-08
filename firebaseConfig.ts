import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA9Z_MsD0pgW97dDXK8XAGIKXTR__I73BE',
  authDomain: 'trombino-b340e.firebaseapp.com',
  projectId: 'trombino-b340e',
  storageBucket: 'trombino-b340e.appspot.com',
  messagingSenderId: '944750279490',
  appId: '1:944750279490:web:ea61cca8e9c4450024a6db',
  measurementId: 'G-3PT3G8ZH23',
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
