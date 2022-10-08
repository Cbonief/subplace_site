import { initializeApp} from "firebase/app";
import { getStorage, ref, getDownloadURL, uploadBytes} from "firebase/storage";
import { getDatabase, ref as dbRef, get as getData, child} from "firebase/database";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCix9kobgtCSlE-zhj0IIkLcQJWM1ko5mo",
  authDomain: "house-of-bread-site-a3e92.firebaseapp.com",
  databaseURL: "https://house-of-bread-site-a3e92-default-rtdb.firebaseio.com",
  projectId: "house-of-bread-site-a3e92",
  storageBucket: "house-of-bread-site-a3e92.appspot.com",
  messagingSenderId: "149357995826",
  appId: "1:149357995826:web:5153ea9969d2efa8cb192b",
  measurementId: "G-HXSQ5QVVGN"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const db = getDatabase(app);
const databaseRef = dbRef(db);

async function getFileURL(filepath){
  const fileRef = ref(storage, filepath);
  return getDownloadURL(fileRef).catch((error)=>console.error(error)).then(url=>{return url});
}

const auth = getAuth(app);
async function userSignIn(username, password){
  const res = await signInWithEmailAndPassword(auth, username, password).catch((error)=>console.error(error));
}

async function uploadFile(File){
  const storageRef = ref(storage, File.name);
  uploadBytes(storageRef, File);
}

export {app as default, ref, getFileURL, storage, getDownloadURL, signInWithEmailAndPassword, auth, userSignIn, getData, child, databaseRef, uploadFile};