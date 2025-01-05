import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import AppContext from "../Appcontext/AppContext";
import ArrowIcon from "../assets/ArrowIcon";
import Contentpage from "./Contentpage";

const CousesPage = () => {
  const { id, course } = useParams();
  const { Coursesidebar, setCourseSidebar,setcontentacessId,CourseList ,scrollDivBg, handleScroll} = useContext(AppContext);
  const num = id;
 
  return (
    <>
      <div className="h-[90vh] w-screen flex flex-col lg:flex-row relative">
        <div
          className={` ${
            Coursesidebar
              ? "h-full shadow-md lg:shadow-none absolute w-96  lg:relative  "
              : " hidden "
          }  z-20  lg:flex lg:h-full lg:w-[20%] ${scrollDivBg ?"bg-white dark:bg-black " :"border-r-2 bg-white dark:bg-black lg:bg-transparent"} dark:bg-black *:dark:text-white overflow-y-scroll dark:border-none `}
        >
          <div className="px-2 py-2 border-t-2 dark:border-none  w-full lg:hidden bg-white *:dark:fill-white  dark:bg-white/5 flex items-center *:cursor-pointer gap-3">
            <button
              onClick={() => {
                setCourseSidebar((prev) => !prev);
              }}
              className={`px-2 py-2 ml-3 rounded-full dark:text-white bg-black/5 dark:bg-white/5   transition-all ${
                Coursesidebar ? "rotate-180" : ""
              }`}
            >
              <ArrowIcon />
            </button>
            <p className="dark:text-white ">{course}</p>
          </div>
          <ul className=" list-disc px-6  *:cursor-pointer lg:mt-0 ">
            {CourseList[`${num}`].menu.map((item, index) => {
              return (
                <li onClick={()=>{setcontentacessId (`${index}`)}} key={index} className="p-2  hover:bg-black/5 dark:hover:bg-white/5">
                  {item.title}
                </li>
              );
            })}
          </ul>
        </div>
        <div  onScroll={handleScroll}  className="w-full h-[100%] lg:h-full lg:w-[80%] overflow-y-scroll relative">
          <div  className={`px-2   py-2 border-t-2 dark:border-none  w-full lg:hidden ${scrollDivBg ? "bg-white dark:bg-black sticky top-0 left-0 z-10":""} dark:bg-black dark:text-white flex items-center *:cursor-pointer gap-3`}>
            <button
              onClick={() => {
                setCourseSidebar((prev) => !prev);
              }}
              className={`px-2 py-2 ml-3 rounded-full bg-black/5 *:dark:fill-white transition-all ${
                Coursesidebar ? "rotate-180" : "-rotate-360"
              }`}
            >
              <ArrowIcon />
            </button>
            <p>{course}</p>
          </div>
          <div className=" mt-4 w-full ">
            <Contentpage  />
          </div>
        </div>
      </div>
    </>
  );
};

export default CousesPage;
