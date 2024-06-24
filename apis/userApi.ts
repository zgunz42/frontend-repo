import axios from 'axios';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDuaphMDa6_gccPHZ-5cQtDaHAXr-KnzrY",
  authDomain: "ebuddy-awesome.firebaseapp.com",
  projectId: "ebuddy-awesome",
  storageBucket: "ebuddy-awesome.appspot.com",
  messagingSenderId: "34066814217",
  appId: "1:34066814217:web:532db7c54eaca76c6f2fd8",
  measurementId: "G-S3VZD6HBY0",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export const login = async (email: string, password: string) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential.user;
};

export const fetchUserData = async (uid: string) => {
  const querySnapshot = await getDocs(collection(db, "USERS"));
  const data: any[] = [];
  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  });
  return data;
};

export const updateUserData = async (uid: string, data: any) => {
  const token = await auth.currentUser?.getIdToken();
  return axios.put('/api/update-user-data', data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
