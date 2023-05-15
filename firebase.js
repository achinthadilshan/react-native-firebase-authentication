// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: 'AIzaSyD7GHTzZoy8W8KkIH4GPtMhouPkd0XoUBA',
   authDomain: 'react-native-authenticat-6df03.firebaseapp.com',
   projectId: 'react-native-authenticat-6df03',
   storageBucket: 'react-native-authenticat-6df03.appspot.com',
   messagingSenderId: '154877310081',
   appId: '1:154877310081:web:e0c09a7c97ee1d533d0980',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { auth }
