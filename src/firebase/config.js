import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyATIwYgBLdjEfgpT3FQJ1dCjcDI5XyPyjY",
  authDomain: "ati-upx6.firebaseapp.com",
  projectId: "ati-upx6",
  storageBucket: "ati-upx6.appspot.com",
  messagingSenderId: "402106064816",
  appId: "1:402106064816:web:bbbb9f0336d5443c910075"
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

export { auth, db, storage }  