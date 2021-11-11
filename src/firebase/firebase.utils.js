import { initializeApp } from 'firebase/app';
import { getFirestore, getDoc, setDoc, doc, onSnapshot  } from '@firebase/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const config = {
  apiKey: "AIzaSyC1Dew6fJndvT4PvLYYftUktt1SbWEvB1I",
  authDomain: "crwn-db-4130c.firebaseapp.com",
  projectId: "crwn-db-4130c",
  storageBucket: "crwn-db-4130c.appspot.com",
  messagingSenderId: "509933079855",
  appId: "1:509933079855:web:4d7ca960a1e6f3122425da",
  measurementId: "G-7YMZQ3JC96"
};
  const firebase = initializeApp(config);
  export const firestore = getFirestore(firebase);

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = doc(firestore, `users/${userAuth.uid}`);
    const docSnap = await getDoc(userRef);
    if (!docSnap.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await setDoc((userRef),{
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch(error){
        console.log('Error creating user', error.message);
      }
    }
    return userRef;
  };

export const auth = getAuth();
export const snapShot = onSnapshot;


const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => signInWithPopup(auth, provider);

export default firebase;
