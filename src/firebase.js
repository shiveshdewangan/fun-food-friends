import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDcfk-_HFUGyU6D-PeY7jr9EUzrztZ28bA",
  authDomain: "funfoodfriends-a07ec.firebaseapp.com",
  databaseURL: "https://funfoodfriends-a07ec.firebaseio.com",
  projectId: "funfoodfriends-a07ec",
  storageBucket: "funfoodfriends-a07ec.appspot.com",
  messagingSenderId: "25143759616",
  appId: "1:25143759616:web:aae45682a08ddc7b"
};

firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
