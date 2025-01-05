import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import {  toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBYinwL0nWHXQhgpN2f9a1AWw6I9L3jp3Y",
  authDomain: "studydesk-94363.firebaseapp.com",
  projectId: "studydesk-94363",
  storageBucket: "studydesk-94363.firebasestorage.app",
  messagingSenderId: "930968332326",
  appId: "1:930968332326:web:c4647171181e531c3a1ee7"
};

const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
 export const db = getFirestore(app);


export const SignUpFirebaseAuth = async (email, password, username) => {
    try {
      
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      const userDocRef = doc(db, "users", user.uid);
      await setDoc(userDocRef, {
        email: user.email,
        uid: user.uid,
        userName:username, 
      });
  
      // console.log("User signed up and added to database:", user);
       toast.success(username);
    } catch (error) {
      console.error("Error signing up:", error.code, error.message);
      toast.error(error.code);
     
    }
  };

  export const loginFirebaseAuth = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log(user);
    } catch (error) {
      console.error("Login failed:", error.code, error.message);
      toast.error(error.code);
      throw error; 
    }
  };
  

 export const logout = async () => {
    await signOut(auth);
    console.log("User logged out");
  };
