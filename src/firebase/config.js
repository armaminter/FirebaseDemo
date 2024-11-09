import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBzK1ae1pfDRPgl1cnHMC7x62UcGceLnh0",
  authDomain: "cortezelective.firebaseapp.com",
  projectId: "cortezelective",
  storageBucket: "cortezelective.firebasestorage.app",
  messagingSenderId: "712388552291",
  appId: "1:712388552291:web:876e6f09acbcf597417a56",
  measurementId: "G-6S3Z3F7QB2"
};

  initializeApp(firebaseConfig);

  const db = getFirestore();

  export {db}