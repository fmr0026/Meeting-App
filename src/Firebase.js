import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyAENT9fctK1ntixU-570STLDwGnTPjrY5c",
    authDomain: "my-app-64e2d.firebaseapp.com",
    databaseURL: "https://my-app-64e2d.firebaseio.com",
    projectId: "my-app-64e2d",
    storageBucket: "my-app-64e2d.appspot.com",
    messagingSenderId: "9973578599"
};

firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;