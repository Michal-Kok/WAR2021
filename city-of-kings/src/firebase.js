import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCQgUZJpEukgapWmJipADXWYoiWF8O4wZs",
    authDomain: "city-ofkings.firebaseapp.com",
    projectId: "city-ofkings",
    storageBucket: "city-ofkings.appspot.com",
    messagingSenderId: "105604755769",
    appId: "1:105604755769:web:98a1d3185eb41a13a638e8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const db = firebase.firestore();