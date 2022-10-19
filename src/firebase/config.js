import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDJYOtC4_E5CLiiTl8LPbzQowsLi9w4Pr0",
    authDomain: "thedojosite-dfc1b.firebaseapp.com",
    projectId: "thedojosite-dfc1b",
    storageBucket: "thedojosite-dfc1b.appspot.com",
    messagingSenderId: "656655006172",
    appId: "1:656655006172:web:541924cd4c9d359687f719"
  };

//init firebase

firebase.initializeApp(firebaseConfig)

//intit services
const projectFirestore=firebase.firestore();
const projectAuth=firebase.auth()
const projectStorage=firebase.storage()

//timestamp

const timestamp=firebase.firestore.Timestamp 

export{projectFirestore,projectAuth,timestamp,projectStorage}