import "./App.css";
import React, { useEffect, useState } from "react";
import AppContext from "./Appcontext/AppContext";
import Home from "./Home";
import { Route, Routes, useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "./Componets/loader";
import { onAuthStateChanged } from "firebase/auth";
import {
  auth,
  db,
  loginFirebaseAuth,
  SignUpFirebaseAuth,
} from "./Authincation/Auth";
import { doc, getDoc } from "firebase/firestore";
import Login from "./Authincation/Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
const [darkMode,setDarkMode]=useState(false);
const [isChecked, setIsChecked] = useState(false);
// const url ="https://studydesk-backend.onrender.com/api";
const url ="http://localhost:8080/api";
const handleCheckboxClick = (e) => {
  const checked = e.target.checked;
  setIsChecked(checked);
  let newTheme="light";
  if (checked || localStorage.getItem("theme")==="light") {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    newTheme="dark";
  
  } else if(!checked || localStorage.getItem("theme")==="dark"){
    document.body.classList.add("light");
    document.body.classList.remove("dark");
    newTheme="light"
  }
  localStorage.setItem("theme", newTheme);
};

useEffect(() => {
  
  
}, []);
  const nav = useNavigate();
  const [scrollDivBg, setScrollPosition] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [contentacessId, setcontentacessId] = useState("0");
  const [Coursesidebar, setCourseSidebar] = useState(false);
  const [CourseList, setCourseList] = useState();
  const [loading, setLoading] = useState(false);

  const handleScroll = (event) => {
    const scrollTop = event.target.scrollTop; // Scroll distance from the top

    if (scrollTop >= 100) {
      setScrollPosition(true);
    } else {
      setScrollPosition(false);
    }
  };

  const fectAPI = async () => {
    const res = await axios.get(url);

    // console.log(res.data.CoursesList);
    setCourseList(res.data.CoursesList);
    setLoading(!false);
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      fectAPI();
    }, 3000);
  }, []);

  const [Islogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Signemail, setSignEmail] = useState("");
  const [SignUserName, setSignUserName] = useState("");
  const [SignPassword, setSignPassword] = useState("");
  const [SignCheckPassword, setSignCheckPassword] = useState("");
  const [user, setUser] = useState(null);
  const [userDB, setUserDB] = useState(null);
  const [Signloading, setSignLoading] = useState(true);
  const [signUPStates, setsignUPStates] = useState(true);
  // auth  --Nikhil
  const signUpFunction = async () => {
    console.log("ini");
    SignPassword === SignCheckPassword
      ? await SignUpFirebaseAuth(Signemail, SignPassword, SignUserName)
      : toast.error("password not match " + setSignCheckPassword);
    toast.success("Logged as " + Signemail);
    console.log("done");
  };
  const signInFunction = async () => {
    console.log("init");
    await loginFirebaseAuth(email, Password);
    toast.success("Logged as " + email)
  };

  const handldeLogin = async () => {
    Islogin ? signInFunction() : signUpFunction();
  };
  //  for navigation --Nikhil
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      currentUser ? nav("/Home") : nav("/");
      setSignLoading(false);
    });

    return () => unsubscribe();
  }, []);
  const getUserData = async (userId) => {
    try {
      const userDocRef = doc(db, "users", userId);

      const docSnap = await getDoc(userDocRef);

      if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data());
        setUserDB(docSnap.data().userName);
      } else {
        console.log("No such document!");
        return null;
      }
    } catch (error) {
      console.error("Error getting document:", error);
      return null;
    }
  };
  Signloading ? "" : user ? getUserData(user.uid) : "";

  const values = {
    sidebar,
    setSidebar,
    nav,
    Coursesidebar,
    setCourseSidebar,
    contentacessId,
    setcontentacessId,
    CourseList,
    handleScroll,
    scrollDivBg,
    Islogin,
    setIsLogin,
    email,
    setEmail,
    Password,
    setPassword,
    Signemail,
    setSignEmail,
    SignUserName,
    setSignUserName,
    SignPassword,
    setSignPassword,
    SignCheckPassword,
    setSignCheckPassword,
    handldeLogin,
    userDB,
    signUPStates,
    setsignUPStates,
    setDarkMode,isChecked,handleCheckboxClick
  };
  return (
    <>
      <AppContext.Provider value={values}>
  
        <Routes>
          <Route path="/" element={ <Login />}></Route>
          <Route path="/Home/*"  element={loading ? <Home /> : <Loader />}></Route>
        </Routes>
       
        <ToastContainer />
      </AppContext.Provider>
    </>
  );
};

export default App;
