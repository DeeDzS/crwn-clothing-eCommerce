import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDkTskwwXQczXuUAdfcVP682wbKZalEiDM',
  authDomain: 'crwn-clothing-deedzs.firebaseapp.com',
  projectId: 'crwn-clothing-deedzs',
  storageBucket: 'crwn-clothing-deedzs.appspot.com',
  messagingSenderId: '652751348304',
  appId: '1:652751348304:web:f1e7e32e72b076e71a2755'
};

const FireBaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  promt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);

export const DataBase = getFirestore();

export const createUserDocFromAuth = async userAuth => {
  const userDocRef = doc(DataBase, 'user', userAuth.uid);
  console.log(userDocRef);
  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot);

  if (!userSnapShot.exists()) {
    // UserSnapShot == false
    const { displayName, email } = userAuth;
    const createdAt = new Date(); 
  }
};
