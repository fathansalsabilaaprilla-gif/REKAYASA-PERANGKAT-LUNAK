// Konfigurasi Firebase (ganti sesuai proyekmu)
const firebaseConfig = {

  apiKey: "AIzaSyBA2wejEpc3q7bX65cTO0NgNoB3vREFGQo",

  authDomain: "input-nilai-mhs-ad467.firebaseapp.com",

  projectId: "input-nilai-mhs-ad467",

  storageBucket: "input-nilai-mhs-ad467.firebasestorage.app",

  messagingSenderId: "212842736961",

  appId: "1:212842736961:web:866952ff8f1cd2f77e45c0",

  measurementId: "G-23RJQ3G7JG"

};



// Inisialisasi Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
