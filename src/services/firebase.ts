// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD_-IaqWc2vopAICKSTQGoW91QcyP2N3M4',
  authDomain: 'auth-9e8c9.firebaseapp.com',
  projectId: 'auth-9e8c9',
  storageBucket: 'auth-9e8c9.appspot.com',
  messagingSenderId: '867616455176',
  appId: '1:867616455176:web:68bbd317dd80bbf2d36fbd',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
