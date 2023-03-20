// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXBqD0kIA_l-G9sAKAy7TRa_91ibZ735w",
  authDomain: "netflix-clone-yt-31a57.firebaseapp.com",
  projectId: "netflix-clone-yt-31a57",
  storageBucket: "netflix-clone-yt-31a57.appspot.com",
  messagingSenderId: "851089902150",
  appId: "1:851089902150:web:43624d08f0d56c2b59d847"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
