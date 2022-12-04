import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";  
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBtQKsnaoIsc0kyGq88Qjx6nnFOZG1h4Ys",
  authDomain: "yunki-authentications.firebaseapp.com",
  projectId: "yunki-authentications",
  storageBucket: "yunki-authentications.appspot.com",
  messagingSenderId: "13556052059",
  appId: "1:13556052059:web:73f708f7a3d536393c0f7e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;