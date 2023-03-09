import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyBiImFCXW14MtnHNmLedceYeEyA3LIZr7A",
  authDomain: "instaclone-b1b16.firebaseapp.com",
  projectId: "instaclone-b1b16",
  storageBucket: "instaclone-b1b16.appspot.com",
  messagingSenderId: "633280563245",
  appId: "1:633280563245:web:221f31c7947575042510a4"
});

const auth=firebase.auth();
const storage=firebase.storage();

export {storage,auth};
