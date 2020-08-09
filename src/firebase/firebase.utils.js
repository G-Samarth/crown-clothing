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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }catch(error){
      console.log("error creating user", error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;