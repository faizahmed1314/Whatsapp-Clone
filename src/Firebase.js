import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjdTKbgPPKeW_qHBwtDUJuIYvwnRPv8t8",
  authDomain: "whatsapp-clone-3187a.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-3187a.firebaseio.com",
  projectId: "whatsapp-clone-3187a",
  storageBucket: "whatsapp-clone-3187a.appspot.com",
  messagingSenderId: "27745740385",
  appId: "1:27745740385:web:26c3711500461c39b56c20",
  measurementId: "G-2H8SF05DVK",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
