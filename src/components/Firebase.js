import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
    apiKey: process.env.YUNKI_APP_FIREBASE_API_KEY,
    authDomain: process.env.YUNKI_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.YUNKI_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.YUNKI_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.YUNKI_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.YUNKI_APP_FIREBASE_APP_ID,
    measurementId: process.env.YUNKI_APP_FIREBASE_APP_MEASUREMENT_ID
});

export const auth = app.auth();
export default app;