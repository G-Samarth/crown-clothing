import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyA1WEs1kmLN7FErUkD3Z_0Bgdh6po9zMZs",
    authDomain: "crown-db-96c9d.firebaseapp.com",
    databaseURL: "https://crown-db-96c9d.firebaseio.com",
    projectId: "crown-db-96c9d",
    storageBucket: "crown-db-96c9d.appspot.com",
    messagingSenderId: "750073164909",
    appId: "1:750073164909:web:9499e8706f3aad484ffb64",
    measurementId: "G-3KY4F6L4PM"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;