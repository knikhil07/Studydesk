import React, { useContext } from "react";
import AppContext from "../Appcontext/AppContext";

const Sidebar = () => {
  const {nav,setSidebar,CourseList}=useContext(AppContext);
  return (
    <div className="min-h-full w-full">
      <div className="mt-2 p-6 w-full h-auto *:cursor-pointer ">
        <h2 className="text-sky-500 font-semibold text-xl">Courses</h2>
        <ol className="p-4 list-disc ">
          {CourseList.map((item,index) => {
            return (
              <li key={index} onClick={()=>{nav(`/Home/${index}/${item.list}`),setSidebar(false)}} className="pl-2  py-1 hover:bg-black/5 dark:text-white"  >{item.list}</li>
           
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default Sidebar;
