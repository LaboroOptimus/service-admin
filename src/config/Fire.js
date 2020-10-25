import firebase from "firebase";

const  firebaseConfig = {
    apiKey: "AIzaSyBkFOIqPIfRquNqwG71V00H04P1Jeyb4n0",
    authDomain: "service-admin-e5b96.firebaseapp.com",
    databaseURL: "https://service-admin-e5b96.firebaseio.com",
    projectId: "service-admin-e5b96",
    storageBucket: "service-admin-e5b96.appspot.com",
    messagingSenderId: "252687049744",
    appId: "1:252687049744:web:e3d66fadb6d5fa025a5695"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire
