import "./App.css";
import React, { useEffect, useState } from "react";
import AppContext from "./Appcontext/AppContext";
import Home from "./Home";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "./Componets/loader";
import Login from "./authinacationsys/Login";

const App = () => {
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
    const res = await axios.get("http://localhost:8080/api");

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
  };
  return (
    <>
      <AppContext.Provider value={values}>
        {/* {loading ? <Home /> : <Loader />} */}
        <Login />
      </AppContext.Provider>
    </>
  );
};

export default App;
