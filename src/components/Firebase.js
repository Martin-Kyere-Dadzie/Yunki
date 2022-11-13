// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtQKsnaoIsc0kyGq88Qjx6nnFOZG1h4Ys",
  authDomain: "yunki-authentications.firebaseapp.com",
  projectId: "yunki-authentications",
  storageBucket: "yunki-authentications.appspot.com",
  messagingSenderId: "13556052059",
  appId: "1:13556052059:web:73f708f7a3d536393c0f7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;