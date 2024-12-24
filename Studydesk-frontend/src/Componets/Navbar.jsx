import React, { useContext, useState } from "react";
import BellIcon from "../assets/BellIcon";
import MenuIcon from "../assets/MenuIcon";
import SearchIcon from "../assets/SearchIcon";
import { AiOutlineClose } from "react-icons/ai";
import AppContext from "../Appcontext/AppContext";
import { IoMdMore } from "react-icons/io";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const {CourseList}=useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState("");
  const filteredItems = CourseList.filter((item) => item.list.toLowerCase().includes(searchTerm.toLowerCase()));
  const { sidebar, setSidebar ,nav,scrollDivBg,userDB} = useContext(AppContext);
  const a = userDB ?userDB.slice(0,1) :"s"; 
  return (
    
    <>
      <div className={`w-full py-3  ${scrollDivBg?"transition-all bg-white":""}   `}>
        <div className="px-6  flex items-center justify-between">
          <div className="flex gap-3 items-center *:cursor-pointer">
            <span
              onClick={() => {
                setSidebar((prev) => !prev);
              }}
              className="w-10 h-10 grid place-content-center hover:bg-black/5 rounded-full"
            >
              <MenuIcon />
            </span>
            <a href="/" className="text-xl font-normal">
              Studydesk
            </a>
          </div>
          <div className="hidden relative px-8 py-2 rounded-full sm:flex items-center gap-3  border-2 ">
            <input
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent outline-0 lg:w-96 "
              placeholder="Search .."
            />
            <button>
              <SearchIcon />
            </button>
            <div
              className="absolute  h-auto rounded-md w-full z-50 bg-white
             top-12 left-0"
            >
              <ul
                className={` *:cursor-pointer ${
                  searchTerm && filteredItems ? "p-4" : ""
                }`}
              >
                {searchTerm &&
                  filteredItems.map((item, index) => (
                    <li onClick={()=>{setSearchTerm(item.list),nav(`/Home/${item.id}/${item.list}`),setSearchTerm("")}} className="pl-2  py-1 hover:text-sky-500" key={index}>
                      {item.list}
                    
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div className="flex items-center gap-3 md:gap-4   *:cursor-pointer">
            <span className="h-8 w-8 grid place-content-center sm:hidden text-slate-950 relative  rounded-full hover:bg-black/5">
              <SearchIcon />
            </span>

            <span className="h-10 w-10 grid place-content-center text-slate-950 relative  rounded-full hover:bg-black/5">
              <BellIcon />
            </span>
            <span className="h-8 w-8 grid place-content-center text-white rounded-full bg-sky-500">
            {`  ${a}`}
            </span>
            <span className="h-10 w-10 text-2xl grid place-content-center text-slate-950 relative  rounded-full hover:bg-black/5">
              <IoMdMore />
            </span>
          </div>
        </div>
      </div>
      {sidebar ? (
        <div className="h-screen w-screen fixed  top-0 left-0 bg-black/5 backdrop-blur-sm z-50">
          <div className="fixed left-5  top-5">
            <div
              onClick={() => {
                setSidebar((prev) => !prev);
              }}
              className="px-2 py-2 rounded-full bg-slate-950/50 text-white cursor-pointer"
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className="h-[85vh] rounded-3xl shadow-md overflow-y-scroll w-[90%] sm:w-96 bg-white absolute top-[10%] left-2">
            <Sidebar />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;
// setcontentacessId